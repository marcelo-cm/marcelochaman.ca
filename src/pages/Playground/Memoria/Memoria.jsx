import Carousel from "../../../components/Carousel/Carousel";
import * as Images from "./images";

function Memoria() {
  const images = [
    { image: Images.MV2Landing, alt: "Landing Page" },
    { image: Images.MV2Journal, alt: "Journal Page" },
    { image: Images.MV2Reflect, alt: "Reflect Page" },
    { image: Images.MV2View, alt: "View Page" },
  ];

  return (
    <div className="content-body">
      <div className="max-w-[1000px] w-full flex flex-col gap-2">
        <Carousel items={images} />
        <div>
          <h2 className="flex flex-row items-center justify-between">
            Memoria{" "}
            <div>
              🔗{" "}
              <a href="https://memoria.live/" className="underline text-sm">
                memoria.live
              </a>
            </div>
          </h2>
          <h3 className="opacity-50">My First Startup. Story & Learnings.</h3>
        </div>
        <hr className="border-[#343434] mb-4" />
        <div className="flex md:flex-row flex-col gap-2 md:gap-10">
          <div className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-xs opacity-50">MY ROLE</h3>
              <p>Front End Developer</p>
              <p>Product Manager</p>
              <p>Product Designer</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs opacity-50">TECH STACK</h3>
              <p>Reactjs</p>
              <p>Nodejs</p>
              <p>Figma</p>
              <p>Supabase</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs opacity-50">DATE & PLACE</h3>
              <p>April 2023 - July 2023</p>
              <p>San Francisco & Toronto</p>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="mb-4">
              <h3 className="text-xs opacity-50">TABLE OF CONTENTS</h3>
              <p className="flex flex-col">
                <a href="#The Beginning">The Beginning - Context</a>
                <a href="#The Problem">The Problem</a>
                <a href="#Version 1">Version 1 – buildspace n&w</a>
                <a href="#Why Version 1 Was Wrong">Why Version 1 Was Wrong</a>
                <a href="#Version 2">Version 2 – A whole revisit</a>
                <a href="#Overview">Overview & Learnings</a>
                <a href="#Next">Next Steps</a>
              </p>
            </div>
            <div className="mb-4 flex flex-col gap-2" id="The Beginning">
              <h3 className="text-xs opacity-50">THE BEGINNING – CONTEXT</h3>
              <p>
                <a href="https://github.com/marcelo-cm">My Github,</a> until
                April 16th, was almost entirely blank. Besides some failed
                attempts to start personal projects, I hadn't yet put all the
                hours I spent on CodeAcademy in practice. Honestly, I thought I
                was pretty good at this front thing, until I actually started
                doing frontends. My first startup was less than I had wished,
                but everything I had hoped & expected – I wished for a homerun,
                but I got a couple of singles.
              </p>
              <p>
                <a href="https://memoria.live/">Memoria [V2]</a> is a voice
                journalling tool that allows users to reflect on their life &
                thoughts through an AI powered chat interface – enabling users
                to clear their mind at the end of each day, or respond to one of
                our GPT generate prompts with a voice memo that is transcribed
                by Deepgram. Originally [V1], it was a second brain, hosting all
                your spontaneous thoughts within one natural language query away
                – eliminating the need for robust note/thought organization
                systems.
              </p>
              <p>
                Our team consisted of myself & 3 bright individuals. All of whom
                I learnt a lot from.
                <ul className="ml-4">
                  <li className="list-disc">
                    Harsh Gupta – Ex-Google PM, Ex-Startup Founder
                  </li>
                  <li className="list-disc">
                    John Santa – Ex-Google PM, UCLA MBA, ML Growth @ Factored
                  </li>
                  <li className="list-disc">
                    Bartek Kowalski – Director of AI Research @ QMIND, and long
                    time friend
                  </li>
                </ul>
              </p>
            </div>
            <div className="mb-4 flex flex-col gap-2" id="The Problem">
              <h3 className="text-xs opacity-50">THE PROBLEM</h3>
              <p>
                When the band was put together, we did not have an idea. During
                our ideation we explored many many MANY options on what to
                build, but we found that we empathized most with building a
                product that would help creative & productivity-obsessed people.
                We found that the most ambitious, creative & productive people
                are also the ones who find the most trouble with remembering
                everything off the top of their mind.
              </p>
              <p>
                From our research we understood that our key problem to solve
                was... rather large. The human brain is a non-stop thinking
                machine, creating ideas, feeling emotions, making reflections,
                drawing patterns around information & knowledge across a wide
                variety of topics (people, places, situations, projects etc).
                This breadth and density of thoughts make it very hard for
                humans to:{" "}
                <ul className="ml-4">
                  <li className="list-disc">
                    Remember thoughts (due to memory constraints)
                  </li>
                  <li className="list-disc">
                    Bring several ideas together – Linking thoughts requires
                    Memory & Cognition, Logic & Reasoning
                  </li>
                  <li className="list-disc"> Learn from these thoughts</li>
                  <li className="list-disc">Take actions on these thoughts</li>
                </ul>
              </p>
              <p>
                Our approach was to solve one aspect of what makes this
                difficult. We use countless tools to organize our lives, which
                is often helpful is retaining information but not in retrieving
                it. Even worse, sometimes organizations system are too hard to
                set up. Our angle was to provide people with a way to:
                <ul className="ml-5">
                  <li className="list-decimal">
                    Store these thoughts quickly, reliably and effortlessly so
                    that they’re not lost with time
                  </li>
                  <li className="list-decimal">
                    Effortlessly organize this information for future use
                  </li>
                  <li className="list-decimal">
                    Enable users to retrieve these thoughts whenever needed so
                    they can take action on them.
                  </li>
                </ul>
              </p>
              <p>Our solution, was what then became Version 1 of Memoria.</p>
            </div>
            <div className="mb-4" id="Version 1">
              <h3 className="text-xs opacity-50">
                VERSION 1 – BUILDSPACE N&W S3
              </h3>
              <p>
                Our product initally was composed of 3 screens:
                <ul className="ml-5">
                  <li className="list-decimal">
                    <div className="flex gap-4">
                      <p>Create</p>
                      <p>
                        A screen where you can record your thoughts to get
                        automatically transcribed, automatically assigned a
                        title and 3 tags with keywords associated to your note.
                      </p>
                    </div>
                  </li>
                  <div className="flex flex-col my-4 gap-2">
                    <img
                      className="border-8 rounded-3xl border-[#dedede]/10"
                      src={Images.MV1Create}
                    />
                    <img
                      className="border-8 rounded-3xl border-[#dedede]/10"
                      src={Images.MV1Create2}
                    />
                  </div>
                  <li className="list-decimal">
                    <div className="flex gap-4">
                      <p>Ask</p>
                      <p>
                        A chat interface to "Query your thoughts", with 3 main
                        features: Retrieve, Expand & Summarize. Interact with
                        the chat like ChatGPT, but get responses that use all
                        your thoughts as context. Retrieve would recall exactly
                        the detail you're looking for, with reference to the
                        notes that it retrieved from. Expand would help you
                        build onto your thoughts by asking questions and using
                        external information. Summarize would help you create a
                        synopsys of various different thoughts and ideas.
                      </p>
                    </div>
                    <img
                      className="border-8 rounded-3xl my-4 border-[#dedede]/10"
                      src={Images.MV1Ask}
                    />
                  </li>
                  <li className="list-decimal">
                    <div className="flex gap-4">
                      <p>View</p>
                      <p>
                        An information bank holding all your thoughts, easily
                        searchable by keyword tags
                      </p>
                    </div>
                    <img
                      className="border-8 rounded-3xl my-4 border-[#dedede]/10"
                      src={Images.MV1View}
                    />
                  </li>
                </ul>
              </p>
              <p>
                I had designed this from scratch about 5 times, and spent dozens
                of hours each week figuring out how to work through the bugs I
                was experiencing since it was my first time developing a
                product. Unfortunately, all we have now is the Figma designs
                since the product has been updated from this version.
              </p>
            </div>
            <div
              className="mb-4 flex flex-col gap-2"
              id="Why Version 1 Was Wrong"
            >
              <h3 className="text-xs opacity-50">WHY VERSION 1 WAS WRONG</h3>
              <p>
                <a href="https://www.linkedin.com/in/braden-ream">
                  Braden, CEO of Voiceflow,{" "}
                </a>{" "}
                said something really interesting during a fireside chat by
                RippleX Ventures: First-time founders don't think about
                distribution, they often think that if they make a good product
                the users will come. This was largely true for me & my team...
                we had focused too much on the product & not enough on
                identifying our real target market, distribution channels, &
                doing customer discovery to understand whether or not this
                pain-point was worth solving. The result of this was that we had
                no clue who our target persona was – we were too broad. We had
                no one use case we had focused on, instead we tried to tackle
                all spontaneous thought retrieval, enhancement & summary. When
                it was time to craft our GTM, we struggled to nail our story.
                For version 2, we aimed to fix this.
              </p>
              <p>
                A mistake I had made was designing the product without doing
                research on UX for other products similar to ours in user flow.
                Our pages were too complex, the language wasn't clear & it
                wasn't immediately intuitive how to interact with the product.
              </p>
              <p>
                As with many Version 1 products, we have various problems we
                overlooked. Users could had a hard time knowing what to ask if
                they didn't come to the platform with questions, but their
                questions were no good if they didn't already put notes in – we
                had a chicken & an egg problem which overall meant that the
                activation time of our product was 3 days, and that was far too
                long.
              </p>
              <p>
                Unfortunately, during this time the team disbanded because of
                time constraints – John went on to work full-time while Harsh
                decided to pursue other initiatives & start job hunting as well.
                The next steps for me were clear at this point:
                <ul className="ml-4">
                  <li className="list-disc">Simplify the interface.</li>
                  <li className="list-disc">Focus on one use case.</li>
                  <li className="list-disc">
                    Help users with ideas on what to record, and what to ask.
                  </li>
                  <li className="list-disc">
                    Use easy to understand & consistent language.
                  </li>
                  <li className="list-disc">
                    Study products to inform design choices.
                  </li>
                </ul>
              </p>
              <p>I took these steps & started working on Version 2</p>
            </div>
            <div className="mb-4" id="Version 2">
              <h3 className="text-xs opacity-50">VERSION 2</h3>
              <p>
                After deliberation with the team prior to disbanded, we decided
                that the most common & delightful use case for our users was
                self-reflection. We decided to start tailoring Memoria to this,
                which begged the question of what kind of notes can they provide
                that will enhance this experience. I thought Journalling was the
                best way to do this for a few reasons.
                <ul className="ml-4">
                  <li className="list-disc">
                    There is a target persona & community to target for this use
                    case, which provides much clearer distribution channels.
                  </li>
                  <li className="list-disc">
                    You can journal every day, making it an organic opportunity
                    for retention & stickiness. Shortening the activation period
                    because users would be able to see their results
                    immediately: a quickly capture voice journal transcribed
                    into organize text (We clear & reformat text with AI).
                  </li>
                  <li className="list-disc">
                    Journalling gives us a lot of detail about a users life,
                    which is extremely helpful as context when answering
                    questions surrounding self-reflection.
                  </li>
                  <li className="list-disc">
                    Journalling is an intuitive process: Recapture what your day
                    was about, how you felt about it, etc. Solving our problem
                    where people did not know what to record.
                  </li>
                </ul>
              </p>
              <p>
                To further assist users in recording journals & asking
                questions, I generated a new prompt for them to journal to, or a
                new question for them to simply tap to ask in the chat
                interface.
              </p>
              <p>
                I then brought on a high-school kid who was interested in
                exploring tech, and we studied various products to understand
                the good and the bad from each journal product's user
                experience, language, and UI. Memoria was then condensed all
                into one screen, merging Create & Ask into one page, and making
                the View page a button on the navigation bar (User interview
                showed that people don't look back into their journals often,
                and when they do it's only for reminiscing & self reflection).
              </p>
              <img
                className="border-8 rounded-3xl my-4 border-[#dedede]/10"
                src={Images.MV2Journal}
              />
              <p>
                On the main page, now called the Journal page, you see both the
                Reflection Bar & the Journalling button. The copywriting was
                changed across the entire product to be clear, descriptive &
                simple. We also provide a prompt to kickstart the users
                journalling, and enable them to even record something at any
                point during the day.
              </p>
              <img
                className="border-8 rounded-3xl my-4 border-[#dedede]/10"
                src={Images.MV2Reflect}
              />
              <p>
                Once a user clicks the Reflection Bar, we open their chat
                interface where they can either ask a question or simply click
                our suggested question to effortlessly start their self
                reflection.
              </p>
              <img
                className="border-8 rounded-3xl my-4 border-[#dedede]/10"
                src={Images.MV2View}
              />
              <p>
                Our view page got a revamp, even though it's less highlighted.
                Filtering became easier, journals became editable after
                submission (previously you could only edit before submitting),
                and sorting became possible. We also introduced the "Time saved
                using Memoria" to show users how much time they saved by
                journalling by voice instead of typing or writing their
                journals.
              </p>
              <img
                className="border-8 rounded-3xl my-4 border-[#dedede]/10"
                src={Images.MV2Landing}
              />
              <p>
                A problem with Version 1 was that we had an extremely high
                bounce rate on our landing page – we didn't have anything
                enticing enough for users, and it's also difficult to understand
                the product without someone explaining it you... so I did just
                that, but in a visual format.
              </p>
              <p>
                There were a lot of major changes made, and we're yet to GTM
                with this new version (though it is live on production), but I
                believe that this should begin to resolve many of the pain
                points users (and we were) having. This time around we spent
                much more time on research (Product, UX, User) and much more
                time focusing on the details, which I believe is a step in the
                right direction.
              </p>
            </div>
            <div className="mb-4 flex flex-col gap-2" id="Overview">
              <h3 className="text-xs opacity-50">OVERVIEW & LEARNINGS</h3>
              <p>
                My goal is to become a Full-stack developer & Product Manager,
                meaning that I want to be able to understand product development
                from every angle: Business, Design and Tech. Achieving this
                goal, I believe, will position be to be a good founder & have a
                good relationship with the rest of my team because I am able to
                understand the work they are all doing, from first-hand
                experience. Memoria was a grand step towards that direction,
                where I was able to get familiar with front-end & introduced to
                back-end, in practice. The rate of learning by developing a real
                product is ~7x the rate of learning by doing courses & practice
                problems.
              </p>
              <p>
                I also learned extensively how to design to optimize for
                front-end development processes. I learned how important it is
                for a designer to be technical, or at least have a deep
                understanding of the experience that happens when you implement
                a front-end. With this project I was able to learn from two
                amazing Product Managers on how to roadmap, how to ideate, and
                simply helped give me perspective on how to address problems and
                assess products.
              </p>
              <p>
                My next product, I'll be able to take all the learnings and
                hopefully achieve a greater impact for others, a greater reach,
                and attain even greater learnings. Along this journey, I am
                thankful to have had all the good people at RippleX Ventures
                during their Fellowship program – where I learnt so much about
                creating companies and dealing with VC firms.
              </p>
            </div>
            <div className="mb-4" id="Next">
              <h3 className="text-xs opacity-50">NEXT STEPS</h3>
              <p>Learn more, build, ship.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memoria;
