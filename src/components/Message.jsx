import Header from "./Header";

function Message() {
  return (
    <>
      <Header title={"Feedback"} icon1={"back"} icon2={"message"} />

      {/* form + social  + intro*/}
      <div className="flex flex-col items-center h-dvh gap-3.5 w-full max-w-[600px] pt-[80px] p-[50px] pb-[110px] bg-gray-100 m-auto">
        {/* intro */}
        <div>
          <h1 className="font-bold text-center">
            ☕ Welcome to KopiKap, where every cup tells a story.
          </h1>
          <p className="text-gray-500 font-light text-justify">
            Nestled in the heart of the community, KopiKap is more than just a
            coffee shop—it’s a cozy haven for coffee lovers, creatives, and
            curious souls. With its warm ambiance, rustic-modern decor, and the
            comforting aroma of freshly brewed beans, KopiKap invites guests to
            slow down and savor the moment.
          </p>
        </div>
        {/* info */}
        <div className="flex flex-col ">
          <p className="text-center font-bold">follow us :</p>
          {/* socail media */}
          <div className="flex flex-row gap-3">
            <svg className="size-8">
              <use href={`/sprite.svg#telegram`} />
            </svg>
            <svg className="size-8">
              <use href={`/sprite.svg#whatsapp`} />
            </svg>
            <svg className="size-8">
              <use href={`/sprite.svg#instagram`} />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3.5 w-full">
          <textarea
            className="border-gray-500 border w-full  h-35 outline-0 rounded-md p-3 resize-none"
            type="text"
            placeholder="Help Us With Your Feedbacks..."
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2.5 rounded-md mb-[75px]">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Message;
