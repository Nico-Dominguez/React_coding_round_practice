import { useState, useEffect } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { categories } from "../../Utils";
import { Link } from "react-router-dom";

export default function ProblemsPage() {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const storedCheckedItems = JSON.parse(localStorage.getItem("checkedItems")) || {};
    setCheckedItems(storedCheckedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheckboxChange = (postId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="flex flex-col w-full items-center pt-24 px-4 bwgradient h-screen">
      <div className="w-full max-w-md flex flex-col h-full">
        <div className="mb-6 h-[8rem]">
          <div className="flex gap-1">
            <Link to={`/`}>
              <p>Home</p>
            </Link>
            <p> / </p>
            <p>Problems</p>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Problems</h1>
          <p className="text-white">
            Browse through the different categories of problems, each with a
            detailed description.
          </p>
        </div>
        <TabGroup className="flex-grow flex flex-col overflow-hidden">
          <TabList className="flex gap-4 overflow-x-auto scrollbar-hide flex-shrink-0">
            {categories.map(({ id, name }) =>
              <Tab
                key={id}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            )}
          </TabList>
          <TabPanels className="mt-3 flex-grow overflow-y-auto scrollbar-hide" style={{ height: 'calc(100vh - 16rem)' }}>
            {categories.map(({ id, name, posts }) =>
              <TabPanel key={id} className="rounded-xl bg-white/5 p-3 h-full">
                <ul>
                  {posts.map(post =>
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={checkedItems[post.id] || false}
                          onChange={() => handleCheckboxChange(post.id)}
                          className="mr-2"
                        />
                        <a target="_blank" href={post.link} className="font-semibold text-white">
                          {post.title}
                        </a>
                      </div>
                      <p className="text-white/75">
                        {post.description}
                      </p>
                      <ul
                        className="flex gap-2 text-white/50 mt-1"
                        aria-hidden="true"
                      >
                        <li>
                          {post.date}
                        </li>
                        <li aria-hidden="true">&middot;</li>
                        <li>
                          {post.author}
                        </li>
                      </ul>
                    </li>
                  )}
                </ul>
              </TabPanel>
            )}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
