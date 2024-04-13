import React from 'react';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { GoPlus } from "react-icons/go";


const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                {header}
                <GoPlus
                    className={`ml-auto font-bold transition-transform text-4xl duration-200 ease-out ${isEnter && "rotate-180 "
                        }`}

                />
            </>
        )}
        className="border border-darkgray mb-2 sm:text-[28px] text-[20px] bg-darkgray"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full py-5 px-5 text-left  ${isEnter && "bg-darkgray font-bold  border-b-2 border-black"
                }`
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out bg-darkgray"
        }}
        panelProps={{ className: "p-8 leading-8 bg-darkgray" }}
    />
);

const FAQPage = () => {
    return (
        <>

            <div className='w-[100%] bg-black border-t-[8px] border-t-gray sm:py-[80px] py-[50px] '>
                <div className=' max-w-[1170px] mx-auto text-white'>
                    <h1 className='sm:text-[50px] text-[40px]  font-bold text-white tracking-wide pb-6 text-center'>Frequently Asked Questions</h1>
                    <div className="mx-2 text-left ">
                        <Accordion transition transitionTimeout={200} >
                            <AccordionItem header="What is Netflix?" >
                                <span>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</span>
                                <br /><br />
                                <span>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</span>
                            </AccordionItem>

                            <AccordionItem header="How much does Netflix cost?">
                                <span>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</span>
                            </AccordionItem>

                            <AccordionItem header="Where can I watch?">
                                <span>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</span>
                                <br /><br />
                                <span>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</span>
                            </AccordionItem>
                            <AccordionItem header="How do I cancel?">
                                <span>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</span>
                            </AccordionItem>

                            <AccordionItem header="What can I watch on Netflix?">
                                <span>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</span>
                            </AccordionItem>

                            <AccordionItem header="Is Netflix good for kids?">
                                <span>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</span>
                                <br /><br />
                                <span>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</span>
                            </AccordionItem>

                        </Accordion>
                    </div>

                    <p className=" text-[20px] text-center pt-7">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className=" max-w-[690px] sm:px-[10px] px-[40px] mx-auto mt-[25px] ">
                        <form action="" className='grid grid-cols-1 sm:grid-cols-[70%_auto] gap-2'>
                            <input type="text" className="bg-gray bg-opacity-35 h-[50px] px-4 border border-bdrclr rounded-md " placeholder="Email Address" />

                            <button className=" text-white text-2xl font-bold px-[10px] h-[50px]  border border-transparent rounded-md bg-red-custom hover:bg-[rgba(193,17,25)] duration-700 hover:text-white focus:outline-none">
                                Get Started
                            </button>

                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FAQPage