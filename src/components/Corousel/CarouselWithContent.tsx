import { useState } from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import MicrosoftAssociated from "../../../public/assets/certifications/microsoft-certified-associate-badge.svg"
import MicrosoftFundamentals from "../../../public/assets/certifications/microsoft-certified-fundamentals-badge.svg"
export function CarouselWithContent() {

    interface Certification {
            id: number;
            title: string;
            subTitle: string;
            description:string;
            date: string;
            imgSrc: string;
            verificationLink: string;
    }

    const certifications: Certification[] = [
        {
            id: 1,
            title: "Microsoft Certified: Azure Administrator Associate",
            subTitle: "Microsoft Azure",
            description: "This certification validates the skills and knowledge to implement, manage, and monitor an organization’s Microsoft Azure environment.",
            date: "Certified on July 20, 2023",
            imgSrc: MicrosoftAssociated,
            verificationLink: "https://www.microsoft.com/en-us/learning/certification-overview.aspx"
        },
        {
            id: 2,
            title: "Microsoft Certified: Azure Fundamentals",
            subTitle: "Microsoft Azure",
            description: "Demonstrates understanding of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support.",
            date: "Certified on September 1, 2022",
            imgSrc: MicrosoftFundamentals,
            verificationLink: "https://www.microsoft.com/en-us/learning/certification-overview.aspx"
        },
    ];

    const [selectedCert, setSelectedCert] = useState<Certification>();
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const openPanel = (certification : Certification) => {
        setSelectedCert(certification);
        setIsPanelOpen(true);
    };

    return (
        <>
            <section className="bg-big-stone-900 py-20 text-center text-white relative">
                <div className="mx-auto px-4">
                    <div className="flex justify-center">
                        <Carousel className="w-full max-w-4xl">
                            <CarouselContent>
                                {certifications.map((cert) => (
                                    <CarouselItem key={cert.id}>
                                        <div className="grid items-center justify-center p-4">
                                            <Card className="bg-big-stone-50 hover:shadow-xl transform hover:-translate-y-1 transition duration-500 ease-in-out">
                                                <CardContent className="flex items-center gap-4 p-6 text-big-stone-900">
                                                    <img alt="Certificate" className="rounded-lg shadow-md" src={cert.imgSrc} style={{ aspectRatio: "1", objectFit: "cover" }} width="64" />
                                                    <div className="flex flex-col justify-center">
                                                        <h6 className="text-lg font-medium">{cert.title}</h6>
                                                        <p className="text-sm">{cert.subTitle}</p>
                                                        <p className="text-sm">{cert.date}</p>
                                                    </div>
                                                </CardContent>
                                                <CardFooter className="flex justify-center">
                                                    <Button onClick={() => openPanel(cert)} size="sm" className="bg-blue-500 hover:bg-blue-600">Learn More</Button>
                                                </CardFooter>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="text-big-stone-950"/>
                            <CarouselNext className="text-big-stone-950"/>
                        </Carousel>
                    </div>
                </div>
            </section>
            {isPanelOpen && selectedCert && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedCert.title}</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">{selectedCert.description}</p>
                                <p className="text-sm text-gray-500">{selectedCert.date}</p>
                                <a href={selectedCert.verificationLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">Verify Certification</a>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button onClick={() => setIsPanelOpen(false)} className="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
