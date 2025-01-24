"use client";

import { Button } from "@/components/ui/button";
import { Checkbox, CheckboxInput } from "@/components/ui/checkbox";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	ArrowsClockwise,
	ArrowsOut,
	Chat,
	FloppyDisk,
	Gear,
	SpeakerHigh,
	Swap,
	X,
} from "@phosphor-icons/react/dist/ssr";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSettingsStore } from "@/stores/settings-store";
import { Form } from "@/components/ui/form";

const schema = z.object({
	show_offline_status: z.boolean(),
	show_playing_status: z.boolean(),
	hide_offline: z.boolean(),
	hide_playing: z.boolean(),
	quick_actions: z.object({
		expand: z.boolean(),
		sound: z.boolean(),
		chat: z.boolean(),
		swap: z.boolean(),
		reload: z.boolean(),
		remove: z.boolean(),
	}),
});

export function SettingsSheet() {
	const settings = useSettingsStore();
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: settings.settings,
	});

	return (
		<Sheet
			onOpenChange={(open) => {
				if (open) {
					form.reset(settings.settings);
				}
			}}
		>
			<SheetTrigger asChild>
				<Button size="icon" className="border-r-0" innerClassName="size-8">
					<Gear size="1.15rem" weight="bold" />
				</Button>
			</SheetTrigger>
			<SheetContent className="text-foreground flex flex-col sm:max-w-md">
				<SheetHeader>
					<SheetTitle>Configurações</SheetTitle>
					<SheetDescription>
						Customize a sua experiencia da maneira que preferir.
					</SheetDescription>
				</SheetHeader>
				<Form {...form}>
					<form
						className="space-y-3 flex-1 grid grid-rows-[1fr_max-content] overflow-y-hidden"
						onSubmit={form.handleSubmit((data) => {
							settings.setSettings(data);
						})}
					>
						<div className="overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted pr-2">
							<div>
								<span className="text-lg text-primary font-bold">
									Streamers
								</span>
								<div>
									<span className="text-[1.75rem] leading-6 text-muted-foreground">
										Status da lives
									</span>
									<CheckboxInput
										control={form.control}
										name="show_offline_status"
									>
										Mostrar se está offline.
									</CheckboxInput>
									<CheckboxInput
										control={form.control}
										name="show_playing_status"
										className="mt-2"
									>
										Mostrar se está jogando no FroggSMP.
									</CheckboxInput>
								</div>
								<div>
									<span className="text-[1.75rem] leading-6 text-muted-foreground">
										Outro
									</span>
									<CheckboxInput control={form.control} name="hide_offline">
										Esconder streamers offline.
									</CheckboxInput>
									<CheckboxInput
										control={form.control}
										name="hide_playing"
										className="mt-2"
									>
										Esconder streamers que não estão jogando no FroggSMP.
									</CheckboxInput>
								</div>
							</div>
							<div className="mt-2">
								<span className="text-lg text-primary font-bold">Lives</span>
								<div>
									<span className="text-[1.75rem] leading-6 text-muted-foreground">
										Botões de ação rápida
									</span>
									<div className="space-y-2">
										<CheckboxInput
											name="quick_actions.expand"
											control={form.control}
										>
											<div className="flex items-center gap-2">
												<ArrowsOut size="1.15rem" weight="bold" />
												Expandir live
											</div>
										</CheckboxInput>
										<CheckboxInput
											name="quick_actions.sound"
											control={form.control}
										>
											<div className="flex items-center gap-2">
												<SpeakerHigh size="1.15rem" weight="bold" />
												Ativa/desativar som
											</div>
										</CheckboxInput>
										<CheckboxInput
											name="quick_actions.chat"
											control={form.control}
										>
											<div className="flex items-center gap-2">
												<Chat size="1.15rem" weight="bold" />
												Ativar/desativar chat
											</div>
										</CheckboxInput>
										<CheckboxInput
											name="quick_actions.swap"
											control={form.control}
										>
											<div className="flex items-center gap-2">
												<Swap size="1.15rem" weight="bold" />
												Trocar lives de posição
											</div>
										</CheckboxInput>
										<CheckboxInput
											name="quick_actions.reload"
											control={form.control}
										>
											<div className="flex items-center gap-2">
												<ArrowsClockwise size="1.15rem" weight="bold" />
												Recarregar live
											</div>
										</CheckboxInput>
										<CheckboxInput
											name="quick_actions.remove"
											control={form.control}
										>
											<div className="flex items-center gap-2">
												<X size="1.15rem" weight="bold" />
												Remover live
											</div>
										</CheckboxInput>
									</div>
								</div>
							</div>
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
