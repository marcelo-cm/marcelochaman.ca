import Carousel from "../../../components/Carousel/Carousel";
import * as Images from "./images";

function LockedIn() {
  const images = [
    { image: Images.Cover, alt: "Cover" },
    { image: Images.How1, alt: "How it Works" },
    { image: Images.How2, alt: "How it Works" },
    { image: Images.About, alt: "About" },
  ];

  return (
    <div className="content-body">
      <div className="max-w-[1000px] w-full flex flex-col gap-2">
        <Carousel items={images} />
        <div>
          <h2>Locked In</h2>
          <h3 className="opacity-50">
            An app for accountability, built for builders
          </h3>
        </div>
        <hr className="border-[#343434] mb-4" />
        <div className="flex md:flex-row flex-col gap-2 md:gap-10">
          <div className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-xs opacity-50">MY ROLE</h3>
              <p>Product Designer</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs opacity-50">TECH STACK</h3>
              <p>Figma</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs opacity-50">DATE & PLACE</h3>
              <p>May 2023, San Francisco</p>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="mb-4">
              <h3 className="text-xs opacity-50">DESCRIPTION</h3>
              <p>
                Locked In is a social accountability app that has a
                GitHub-commit-like feature but for all work, not just coding. At
                the beginning of each work session, you can start your session
                by swiping across the bottom bar – Just like good 'ol iOS – and
                a timer will start.
                <br /> <br />
                When your timer is on, your status will update to "Locked In"
                for all your friends to see! This will be motivating for others
                to also lock in with you – and friends can even turn on their
                notification for you so they get a ding when you lock in.
                <br /> <br />
                When you're done working, simply swipe back and you will get
                brought to a screen where you can write the details of your work
                session, add any tags or relevant links, and publish it to your
                Ship Log. You can share your Ship Log, and the heatmap it comes
                with, with friends, or employers you want to impress!
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs opacity-50">STORY</h3>
              <p>
                I was sitting in the{" "}
                <a href="https://goo.gl/maps/ZECJy8JF6VVxaSAs9">
                  HI SF Fisherman's Wharf Hostel
                </a>{" "}
                [$43 a night, would rec.] for{" "}
                <a href="https://buildspace.so/">buildspace's n&w s3</a> event
                and after meeting a few builder's a felt super inspired to
                create something new. My first inspiration for this idea was
                triggered by two things:
                <br />
                <br />
                <ol>
                  <li className="ml-4 list-decimal hover:list-disc">
                    Everyone is SF was guaranteed to ask me one thing: "What are
                    you building"
                  </li>
                  <li className="ml-4 list-decimal hover:list-disc">
                    Every time I would cold email/pitch a startup to hire me (0%
                    from the field so far, but that's what I get for going for
                    the full-time PM roles at Series A companies), they would
                    ask me: "What have you built?"
                  </li>
                </ol>
                <br />
                and while I could tell them that I'm all about that grind,
                actions spoke louder than words. I wished there was a way for me
                to show my consistent every day grind – just like GitHub
                heatmaps – but for non-software related building (ie.
                designing). Immediately, it hit me. Three hours later, it was
                done.
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-xs opacity-50 self-center my-4">IMAGES</h3>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <img className="max-w-[300px]" src={Images.FRIENDS} />
          <img className="max-w-[300px]" src={Images.PUBLISH} />
          <img className="max-w-[300px]" src={Images.SHIPLOG} />
          <img className="max-w-[300px]" src={Images.HOME} />
          <img className="max-w-[300px]" src={Images.LOCKED} />
        </div>
      </div>
    </div>
  );
}

export default LockedIn;
