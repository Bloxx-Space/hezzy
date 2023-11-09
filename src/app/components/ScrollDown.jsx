"use client";

export default function ScrollDown() {
  return (
    <>
      <div className="flex h-screen w-screen absolute top-0">
        <div
          className="scrolldown m-auto"
          onClick={() => {
            window.scrollTo(0, 1000)
          }}
        >
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </div>
    </>
  );
}
