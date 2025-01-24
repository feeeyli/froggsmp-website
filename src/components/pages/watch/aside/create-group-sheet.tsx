"use client";

import { Image } from "@/components/image";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Streamer, Streamers } from "@/data/streamers";
import { useGroupsStore } from "@/stores/groups-store";
import { Group, TileType } from "@/types/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowsClockwise, FloppyDisk } from "@phosphor-icons/react/dist/ssr";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type CreateGroupSheetProps = {
	children: ReactNode;
};

const schema = z.object({
	display_name: z.string().nonempty("O nome é obrigatório!"),
	slug: z.string().nonempty("O nome na url é obrigatório!"),
	members_ids: z
		.array(z.string())
		.nonempty()
		.min(1, "Escolha pelo menos 1 membro!"),
});

function generateSlug(name: string) {
	return name
		.toLocaleLowerCase()
		.replaceAll(/(\s|\/)/gu, "-")
		.replaceAll(/[^\p{L}\p{N}\p{Sm}-]/gu, "");
}

export function CreateGroupSheet(props: CreateGroupSheetProps) {
	const [opened, setOpened] = useState(false);
	const groups = useGroupsStore();
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			display_name: "",
			slug: "",
			members_ids: [],
		},
	});

	function onSubmit(values: z.infer<typeof schema>) {
		if (groups.groups.some((group) => group.slug === values.slug)) {
			form.setError("slug", {
				message: "Um grupo com esse nome já existe",
			});

			return;
		}

		const members = values.members_ids
			.map(Streamers.get)
			.filter((streamer): streamer is Streamer => streamer !== undefined);

		const group: Group = {
			display_name: values.display_name,
			slug: values.slug,
			members: members.map((member) => {
				return {
					id: member.id,
					type: member.youtube_channel_id ? TileType.yt : TileType.twitch,
					minecraft_uuid: member.minecraft_uuid,
				};
			}),
		};

		groups.addGroup(group);

		setOpened(false);
	}

	return (
		<Sheet
			onOpenChange={(open) => {
				form.reset({
					display_name: "",
					slug: "",
					members_ids: [],
				});
				setOpened(open);
			}}
			open={opened}
		>
			{props.children}
			<SheetContent className="text-foreground flex flex-col sm:max-w-md">
				<SheetHeader>
					<SheetTitle>Criar grupo</SheetTitle>
				</SheetHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-3 flex-1 grid grid-rows-[1fr_max-content] overflow-y-hidden"
					>
						<div className="space-y-2 flex flex-col overflow-y-hidden">
							<FormField
								control={form.control}
								name="display_name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome</FormLabel>
										<FormControl>
											<Input placeholder="ex.: Grupo Legal <3" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="slug"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Nome na URL{" "}
											<span className="text-primary">
												(clique no botão para gerar automaticamente)
											</span>
										</FormLabel>
										<div className="flex w-full">
											<FormControl>
												<Input
													placeholder="ex.: grupo-legal"
													containerClassName="flex-1"
													{...field}
												/>
											</FormControl>
											<Button
												size="icon"
												innerClassName="size-8"
												onClick={() => {
													form.setValue(
														"slug",
														generateSlug(form.getValues("display_name")),
													);
												}}
												type="button"
											>
												<ArrowsClockwise size="1rem" weight="bold" />
											</Button>
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="members_ids"
								render={({ field }) => (
									<FormItem className="overflow-y-hidden flex flex-col">
										<FormLabel htmlFor={undefined}>
											Membros <span className="text-primary">(mínimo 1)</span>
										</FormLabel>
										<FormControl>
											<ToggleGroup
												type="multiple"
												value={field.value}
												onValueChange={field.onChange}
												ref={field.ref}
												className="mt-1 grid grid-cols-2 p-0.5 pr-2 gap-y-1 gap-x-2 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted"
											>
												{Streamers.get().map((streamer) => (
													<ToggleGroupItem
														key={streamer.id}
														value={streamer.id}
														innerClassName="justify-start gap-2"
													>
														<Image
															src={streamer.thumbnail_url}
															alt={`Imagem de ${streamer.display_name}`}
															className="size-12 pointer-events-none"
														/>
														<span className="overflow-x-hidden text-ellipsis">
															{streamer.display_name}
														</span>
													</ToggleGroupItem>
												))}
											</ToggleGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<SheetFooter>
							<SheetClose asChild>
								<Button
									innerClassName="gap-2"
									variant="destructive"
									type="button"
								>
									Cancelar
								</Button>
							</SheetClose>
							<Button innerClassName="gap-2" type="submit">
								Salvar <FloppyDisk size="1rem" weight="bold" />
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
