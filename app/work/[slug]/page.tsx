// app/gallery/[slug]/page.tsx
"use server";

import fs from "fs";
import path from "path";
import GalleryClient from "@/components/GalleryClient";
import Navbar from "@/components/Navbar";
import RenderPhotos from "@/components/RenderPhotos";
import Footer from "@/components/Footer";

export default async function GalleryPage({ params }: any) {

    const param = await (params as { slug: string })
    const slug = param.slug

    const programs = {
        "old-age-home": {
            title: "Radha Krishna Old Age Home",
            gradient: "from-orange-400 to-red-500",
            sections: [
                {
                    num: '1',
                    description:
                        `With the support of the Ministry of Social Justice & Empowerment, Government of India, the Manav Utthan Samiti, Lucknow established and began operating the Radha Krishna Old Age Home on 01.04.2019 at Fardapur, Bilgram Road, Hardoi, Uttar Pradesh.The home is being run with a capacity of 50 residents, providing admission to both elderly women and men aged 60 years or above.Various essential facilities and services are being provided to the elderly residents of the home, enabling them to live a dignified and comfortable life.`
                },
                {
                    num: '2',
                    description:
                        `With the cooperation of the Ministry of Social Justice and Empowerment, Government of India, the old age home located at Fardapur, Bilgram Road, Hardoi, Uttar Pradesh is operated by the Manav Utthan Samiti, Lucknow. A Social Audit Team conducted a social audit from 23/09/2023 to 26/09/2023. During the audit, they interacted with all residents, asked about their issues, and thoroughly examined all records of the institution.On the final day, a workshop was organized in which the elderly residents were informed about their rights. The committee was also given several suggestions and guidelines. It was observed that regular activities such bhajan-kirtan, yoga, and entertainment are conducted from time to time. Some elderly residents were also seen strolling near the parking area.The Social Audit Team noted that the residents of the Fardapur Old Age Home live together like a family and appear happy and content.
During this occasion, Social Audit officials Mr. Anil Sidhu, Mr. Javed Raja, Mr. Chandan Rawat, Mr. Indrajeet Singh and office staff members Mr. Manoj Yadav, Mrs. Maya Devi, Mrs. Seema Devi, Ranjeet Gaurav, Amit Kumar, Ms. Sandhya Shukla, Satendra Yadav, and others were present.`
                },
                {
                    num: '3',
                    description:
                        `From 20 February 2025 to 21 February 2025, a program was organized in the premises of the Old Age Home, Fardapur, Bilgram Road, Hardoi, which is operated by the Human Utthan Samiti, Lucknow with the cooperation of the Ministry of Social Justice and Empowerment, Government of India. The event included the recitation of Sunderkand and Ramcharitmanas. After 24 hours of continuous recitation, prasad and a community feast (preet bhoj) were distributed.
Several district officials, social workers, respected citizens of Hardoi,`
                },
                {
                    num: '4',
                    description:
                        `With the cooperation of the Ministry of Social Justice and Empowerment, Government of India, the Manav Utthan Samiti, Lucknow is running a program at the premises of Radha Krishna Shraddha Ashram, Fardapur, Bilgram Road, Hardoi. Today, on the auspicious occasion of International Yoga Day, 21 June 2025, the program began with Surya Namaskar. Trainers Amit Kumar, Jitendra Kumar, Akash Kumar, and Rajni Verma conducted yoga sessions for the elderly residents as well as the general public.
They also explained the various benefits of yoga, particularly in relieving issues such as back pain, shoulder pain, knee pain, and spinal discomfort, and conducted practical yoga exercises accordingly.On this occasion, the in-charge of the old age home, Manoj Kumar, shared that regular devotional singing (bhajan-kirtan), medical care for the elderly by doctors, and various activities such as yoga and entertainment programs are continuously conducted in the ashram. He further stated that such programs will continue to be organized in the future as well.On this joyous occasion, common citizens, local residents, and the elderly members of the ashram—grandfathers and grandmothers—participated enthusiastically.`
                }

            ]
        },
        "women-empowerment": {
            title: "Women Empowerment",
            gradient: "from-pink-400 to-red-500",
            sections: [
                {
                    num: '1',
                    description:
                        `Content coming soon...`
                }
            ]
        },
        "free-eye-checkup-camp": {
            title: "Free Eye Checkup Camp",
            gradient: "from-blue-400 to-indigo-500",
            sections: [
                {
                    num: '1',
                    description:
                        `On 21 May, at the Lucknow Toll Plaza on the Lucknow–Agra Expressway, with the cooperation of the Ministry of Road Transport and Highways, Government of India, Manav Utthan Samiti organized a free eye-checkup and free spectacles distribution program for truck drivers. The event was inaugurated by the chief guest, Mr. Ramesh Chandra Dubey, Chief Security Officer, by cutting the ribbon.On this occasion, the committee’s coordinatorMr.R.K.Chaurasia welcomed the chief guest with a garland and presented him with a memento. Mr. Rajesh Kumar Singh Chandel, Security Officer; Mr. B.P. Verma, Assistant Security Officer; Mr. Dinesh Singh, Toll Plaza Manager; and Mr. Ashok Singh were also felicitated with garlands and mementos. Social worker Mrs. Suman Singh and volunteer Ms. Aarti Nag also honored the guests with garlands and mementos.The committee team—including Dr. Ugrasen Yadav, Ms. Aarti Nag, Mrs. Sonika Pandey, Mr. Mumtaz Ali, Mr. Virendra Singh, Mr. Naman Tripathi, social worker Mr. A.P. Singh, photographer Mohit Singh, and accountant Gaurav Tiwari—was also honored.A free eye-checkup camp and spectacles distribution camp was set up for truck drivers at the toll plaza. At the eye-checkup camp, truck drivers with vision problems were examined by skilled eye specialists, and spectacles were distributed as needed. The camp will run from 21 May 2022 to 27 May 2022.Chief guest Mr. Ramesh Chandra Dubey stated that to reduce increasing road accidents in the district, social organizations have stepped forward to run such awareness campaigns. Free eye-checkups and free spectacles for drivers will help improve their vision, which in turn can significantly reduce road accidents. Around 80 truck drivers got their eyes examined, and those who needed them received spectacles free of cost.On this occasion, Mr. B.P. Verma, Assistant Security Officer, said that the efforts of the organizations working for truck drivers are highly commendable, as they ensure eye-testing and free spectacles distribution. He encouraged all truck drivers arriving at the plaza to participate in large numbers.In conclusion, Mr. R.K. Chaurasia thanked all toll plaza officers and staff for their cooperation and appealed to all truck drivers to get their eyes tested and collect their free spectacles. Truck drivers participated enthusiastically in the camp.`
                }
            ]
        },
        "financial-Literacy-and-investment-awareness-program": {
            title: "Financial Literacy & Investment Awareness",
            gradient: "from-green-400 to-teal-500",
            sections: [
                {
                    num: '1',
                    description:
                        `On 21 May, at the Lucknow Toll Plaza on the Lucknow–Agra Expressway, with the cooperation of the Ministry of Road Transport and Highways, Government of India, Manav Utthan Samiti organized a free eye-checkup and free spectacles distribution program for truck drivers. The event was inaugurated by the chief guest, Mr. Ramesh Chandra Dubey, Chief Security Officer, by cutting the ribbon.On this occasion, the committee’s coordinatorMr.R.K.Chaurasia welcomed the chief guest with a garland and presented him with a memento. Mr. Rajesh Kumar Singh Chandel, Security Officer; Mr. B.P. Verma, Assistant Security Officer; Mr. Dinesh Singh, Toll Plaza Manager; and Mr. Ashok Singh were also felicitated with garlands and mementos. Social worker Mrs. Suman Singh and volunteer Ms. Aarti Nag also honored the guests with garlands and mementos.The committee team—including Dr. Ugrasen Yadav, Ms. Aarti Nag, Mrs. Sonika Pandey, Mr. Mumtaz Ali, Mr. Virendra Singh, Mr. Naman Tripathi, social worker Mr. A.P. Singh, photographer Mohit Singh, and accountant Gaurav Tiwari—was also honored.A free eye-checkup camp and spectacles distribution camp was set up for truck drivers at the toll plaza. At the eye-checkup camp, truck drivers with vision problems were examined by skilled eye specialists, and spectacles were distributed as needed. The camp will run from 21 May 2022 to 27 May 2022.Chief guest Mr. Ramesh Chandra Dubey stated that to reduce increasing road accidents in the district, social organizations have stepped forward to run such awareness campaigns. Free eye-checkups and free spectacles for drivers will help improve their vision, which in turn can significantly reduce road accidents. Around 80 truck drivers got their eyes examined, and those who needed them received spectacles free of cost.On this occasion, Mr. B.P. Verma, Assistant Security Officer, said that the efforts of the organizations working for truck drivers are highly commendable, as they ensure eye-testing and free spectacles distribution. He encouraged all truck drivers arriving at the plaza to participate in large numbers.In conclusion, Mr. R.K. Chaurasia thanked all toll plaza officers and staff for their cooperation and appealed to all truck drivers to get their eyes tested and collect their free spectacles. Truck drivers participated enthusiastically in the camp.`
                }
            ]
        },
        "empowering-minority-community-through-education": {
            title:
                "Empowering Minority Community through Education & Awareness - Banda",
            gradient: "from-teal-400 to-green-500",
            sections: [
                {
                    num: '1',
                    description:
                        `With the support of the Ministry of Minority Affairs, Government of India, a one-day seminar was organized by the Manav Utthan Samiti, Lucknow on 29 June 2019 at Hardauli, Development Block and Tehsil Baberu, District Banda, for the effective and meaningful participation of the minority community.
The chief guest of the program, Hon’ble Chandrapal Kushwaha Ji, inaugurated the event by lighting the ceremonial lamp. On this occasion, former Director M. L. Gupta (Treasury & Pension, Jhansi Division) and Government Advocate Kaushal Kishore Sharma were also present.
In the program, the chief guest provided detailed information about all the schemes being run by the Ministry for minority communities, such as Seekho Kamao, USTTAD, Nai Manzil, Hamari Dharohar, Naya Savera, Nai Roshni, and others. He also said that Manav Utthan Samiti has set an example by coming from Lucknow to work in such a backward and remote area.
The Government Advocate present on the stage explained the rights of citizens and said that without education, people cannot gain proper knowledge. If one truly wants to gain information and achieve something in life, education is extremely important.Former Director Gupta Ji explained the various initiatives of the government, the schemes available, and how people can benefit from them.CoordinatorRamkishor Chaurasia said that without education we remain incomplete. Unless we receive education, we will continue to remain backward. The Ministry of Minority Affairs runs 15 different schemes for minority communities, but many people are unaware of where the department is located, who the district officials are, or where the Directorate functions. With education, all such information becomes accessible. He appealed to everyone to educate their sons and daughters so that future generations can access departmental information and avail maximum benefits.The President of the organization, S.K. Chaurasia, said that the institution works in such backward areas where help is truly needed.Secretary Prithvi Pal Ji said that with your continued support, we will always stand shoulder to shoulder with you and keep organizing such programs in your region. Thank you.`
                }
            ]
        },
        "women-leadership": {
            title: "Women Leadership - Nai Roshni",
            gradient: "from-purple-400 to-pink-500",
            sections: [
                {
                    num: '1',
                    description:
                        `Content coming soon...`
                }
            ]
        },
    };

    const program = (programs as any)[slug];

    // ❌ Invalid slug
    if (!program) {
        return (
            <div className="p-10 text-center text-2xl font-bold">
                Invalid Program Slug: {slug}
            </div>
        );
    }

    const getImages = (slug: string, num: string) => {

        const imagesDir = path.join(process.cwd(), 'public', 'work', slug, num);
        console.log('Images directory:', imagesDir);
        let files: string[] = [];
        try {
            files = fs.readdirSync(imagesDir).filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
            console.log('Files found:', files);
        } catch (e) {
            files = [];
        }
        files = files.map(photo => "/work/" + slug + "/" + num + "/" + photo)
        console.log("FILes", files)
        return files
    }

    console.log(getImages(slug, "1"), "Found")
    // console.log(files, "f")
    return (
        <div>
            <Navbar />
            <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white text-black">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
                    <div className="flex flex-col gap-8">
                        {
                            program.sections.map((section: any) =>
                                <div key={section.num}>
                                    {/* Description */}
                                    <p className="text-lg mb-10">{section.description}</p>
                                    {/* Client Component */}
                                    <RenderPhotos filenames={getImages(slug, section.num)} />
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
