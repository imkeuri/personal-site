import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export function CarouselWithContent() {

    return (
        <>
            <section className="container bg-gray-50 py-20 text-center text-gray-500 relative">
                <div className=" mx-auto px-4 ">
                    <div className="flex flex-wrap -mx-4 items-center mb-4">
                        <div className="mx-auto px-4 w-full lg:w-8/12">
                            <h2 className="font-medium mb-1 text-blue-600">Here my certifications</h2>
                            <h3 className="font-bold mb-1 text-3xl text-gray-900">I'm in continuous growing. </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Carousel className="w-full max-w-lg">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="grid items-center justify-center p-4 ">
                                        <Card >
                                            <CardContent className="flex gap-4 p-6">
                                                <img
                                                    alt="Certificate"
                                                    className="rounded-lg"
                                                    height="64"
                                                    src="src/assets/certifications/microsoft-certified-associate-badge.svg"
                                                    style={{
                                                        aspectRatio: "64/64",
                                                        objectFit: "cover",
                                                    }}
                                                    width="64"
                                                />
                                                <div className="grid gap-1.5">
                                                    <h6 className="text-sm font-medium">Microsoft Certified: Azure
                                                        Administrator
                                                        Associate</h6>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Microsoft
                                                        Azure</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Certified on
                                                        July
                                                        20, 2023</p>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button size="sm">Learn More</Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="grid items-center justify-center p-4">
                                        <Card>
                                            <CardContent className="flex gap-4 p-6">
                                                <img
                                                    alt="Certificate"
                                                    className="rounded-lg"
                                                    height="64"
                                                    src="src/assets/certifications/microsoft-certified-fundamentals-badge.svg"
                                                    style={{
                                                        aspectRatio: "64/64",
                                                        objectFit: "cover",
                                                    }}
                                                    width="64"
                                                />
                                                <div className="grid gap-1.5">
                                                    <h6 className="text-sm font-medium">Microsoft Certified: Azure
                                                        Fundamentals</h6>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Microsoft
                                                        Azure</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Certified on
                                                        September 1, 2022</p>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button size="sm">Learn More</Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </Carousel>
                    </div>

                </div>
            </section>

        </>

    );
}