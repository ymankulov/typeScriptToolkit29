import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getUsers } from "../../redux/reducers/UserCreate";
import { useAppSelector } from "../../hooks/useAppSelector";
// @ts-ignore
import userImg from "../../assets/images/user.png"

const Home = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((s) => s.useSlice);
  console.log(user, "use");

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <div className="container">
        <div className="">
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {user.map((el) => (
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={userImg}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {el.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {el.email}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {el.phone}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
