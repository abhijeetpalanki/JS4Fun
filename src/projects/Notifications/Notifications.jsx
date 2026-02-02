import { useState } from "react";
import {
  mark,
  angela,
  jacob,
  rizky,
  kim,
  nathan,
  anna,
  chessClub,
} from "./images";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      author: {
        name: "Mark Webber",
        src: mark,
        href: "#",
      },
      text: "reacted to your recent post",
      link: {
        text: "My first tournament today!",
        href: "#",
      },
      time: "1m ago",
      isUnread: true,
    },
    {
      id: 2,
      author: {
        name: "Angela Gray",
        src: angela,
        href: "#",
      },
      text: "followed you",
      time: "5m ago",
      isUnread: true,
    },
    {
      id: 3,
      author: {
        name: "Jacob Thompson",
        src: jacob,
        href: "#",
      },
      text: "has joined your group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "1 day ago",
      isUnread: true,
    },
    {
      id: 4,
      author: {
        name: "Rizky Hasanuddin",
        src: rizky,
        href: "#",
      },
      text: "sent you a private message",
      time: "5 days ago",
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for few weeks now and Ii'm already having lots of fun and improving my game.",
      isUnread: false,
    },
    {
      id: 5,
      author: {
        name: "Kimberly Smith",
        src: kim,
        href: "#",
      },
      text: "commented on your picture",
      image: {
        src: chessClub,
        alt: "Chess Club",
        href: "#",
      },
      time: "1 week ago",
      isUnread: false,
    },
    {
      id: 6,
      author: {
        name: "Nathan Peterson",
        src: nathan,
        href: "#",
      },
      text: "reacted to your recent post",
      link: {
        text: "5 end-game strategies to increase your win rate",
        href: "#",
      },
      time: "2 weeks ago",
      isUnread: false,
    },
    {
      id: 7,
      author: {
        name: "Anna Kim",
        src: anna,
        href: "#",
      },
      text: "left the group Chess Club",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "2 weeks ago",
      isUnread: false,
    },
  ]);

  const handleNotificationClick = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: !n.isUnread } : n)),
    );
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: false })));
  };

  return (
    <div className="bg-[#f7fafd] text-[#1c202b] text-[clamp(1.00rem,calc(0.85rem+0.73vw),1.38rem)] grid items-center p-8 m-0 leading-normal select-none">
      <div className="grid gap-6 bg-white rounded-lg shadow-[0_4px_2rem_#e5effa] py-[clamp(2.07rem,calc(1.57rem+2.50vw),3.36rem)] px-[clamp(1.44rem,calc(1.16rem+1.38vw),2.15rem)] max-w-200 mx-auto">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2 p-4">
            <h1 className="text-[clamp(1.44rem,calc(1.16rem+1.38vw),2.15rem)] leading-none">
              Notifications
            </h1>
            <span className="bg-[hsl(219,85%,26%)] text-white leading-none mt-[0.2rem] py-[0.2rem] px-[0.7rem] rounded-lg">
              {notifications.filter((n) => n.isUnread).length}
            </span>
          </div>
          <button
            className="border-none text-[#1c202b] transition-colors duration-200 ease-in-out hover:text-[#0a317b] focus:text-[#0a317b]"
            onClick={markAllRead}
          >
            Mark all as read
          </button>
        </header>
        <div className="grid gap-2">
          {notifications &&
            notifications.map((n) => (
              <div
                key={n.id}
                onClick={() => handleNotificationClick(n.id)}
                className={`p-4 rounded-[0.7rem] flex items-center justify-between gap-2 cursor-pointer ${
                  n.isUnread ? "bg-[hsl(211,68%,94%)]" : ""
                }`}
              >
                <div className="flex items-start gap-2">
                  <img
                    src={n.author.src}
                    alt={n.author.name}
                    className="w-12.5 aspect-1"
                  />
                  <div className="grid gap-4">
                    <div>
                      <div>
                        <a
                          href={n.author.href}
                          className="font-bold text-[#1c202b] transition-colors duration-200 ease-in-out hover:text-[#0a317b] focus:text-[#0a317b] mr-1"
                        >
                          {n.author.name}
                        </a>
                        <span>{n.text}</span>
                        {n.link && (
                          <a
                            href={n.link.href}
                            className="font-bold text-[#1c202b] transition-colors duration-200 ease-in-out hover:text-[#0a317b] focus:text-[#0a317b] ml-1"
                          >
                            {n.link.text}
                          </a>
                        )}
                        <span
                          className={
                            n.isUnread
                              ? "w-[0.8rem] h-[0.8rem] bg-[hsl(1,90%,64%)] inline-block ml-1  rounded-full"
                              : ""
                          }
                        ></span>
                      </div>
                      <p className="text-[hsl(219,14%,63%)]">{n.time}</p>
                    </div>
                    {n.privateMessage && (
                      <p className="bg-[hsl(210,60%,98%)] p-4 rounded-[0.7rem]">
                        {n.privateMessage}
                      </p>
                    )}
                  </div>
                </div>
                {n.image && (
                  <a
                    href={n.image.src}
                    className="font-bold text-[#1c202b] transition-colors duration-200 ease-in-out hover:text-[#0a317b] focus:text-[#0a317b]"
                  >
                    <img src={n.image.src} alt={n.image.alt} />
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
