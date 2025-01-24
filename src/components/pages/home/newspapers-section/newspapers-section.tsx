"use client";

import { Button } from "@/components/ui/button";
import { Newspaper } from "@/types/data";
import dayjs from "dayjs";
import { PhotoProvider, PhotoView } from "react-photo-view";

type NewspapersSectionProps = {
	newspapers: Newspaper[];
};

export function NewspapersSection(props: NewspapersSectionProps) {
	return (
		<section className="px-4 sm:px-8 md:px-20 lg:px-36 py-16" id="correio">
			<h2 className="animate-in duration-200 slide-in-from-left-6 fade-in-0 delay-250">
				Correio Froggiano
			</h2>
			<div className="divide-y-2 divide-primary/50">
				{props.newspapers.map((n) => {
					const date = dayjs(n.day);

					return (
						<div key={n.edition} className="py-4 flex flex-col">
							<p className="font-bold text-lg leading-7">
								Edição <span className="text-primary">#{n.edition}</span>
							</p>
							<span className="text-secondary leading-6">
								De {date.subtract(7, "days").format("D [de] MMM.")} a{" "}
								{date.format("D [de] MMM.")}
							</span>
							<PhotoProvider maskOpacity={0.5}>
								<div className="flex gap-2 mt-4">
									{n.pages.map((page, i) => (
										<PhotoView key={page.picture} src={page.picture}>
											<div className="flex flex-col items-center">
												<Button variant="dark" innerClassName="h-auto p-0.5">
													<img
														src={page.picture}
														alt={`Pagina ${i}`}
														className="w-36 border-2 border-border"
														// containerClassName="border-0"
													/>
												</Button>
												<span className="text-secondary/75">
													Pagina {i + 1}
												</span>
											</div>
										</PhotoView>
									))}
								</div>
							</PhotoProvider>
						</div>
					);
				})}
			</div>
		</section>
	);
}
