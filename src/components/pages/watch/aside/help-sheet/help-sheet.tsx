import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/multi/accordion";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { QuestionMark } from "@phosphor-icons/react/dist/ssr";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

const questions = [
	`Sim, para isso há 3 jeitos: 
- Conecte sua conta pelo site da [Twitch](http://twitch.tv) e então atualize a pagina do MultiFrogg. 
- Envie uma mensagem em qualquer chat pelo MultiFrogg e um alerta de login aparecerá. 
- Em qualquer live, clique em seguir e o alerta de login também aparecerá.`,

	`No topo de cada live há um menu com varias opções, entre elas um botão para alternar o chat da live em questão.
	
**Obs.:** Caso o botão não apareça, verifique nas configurações se ele está ativo.`,

	`Quando o streamer está cinza, isso significa que ele está offline. Quando há um indicador amarelo ele está online porem pode não estar jogando no FroggSMP no momento. 

Streamers que fazem live exclusivamente no Youtube não possuem essas variações, eles aparecerão sempre como online e com um indicador vermelho.

**Obs.:** Para indicar se o streamers está ou não jogando no FroggSMP é levado em consideração as tags e o jogo marcado na live, por isso nem sempre o indicador estará correto.`,

	// "Se você estiver com algum erro, algo não estiver funcionando corretamente e afins, você pode entrar no nosso [formulário de feedbacks](https://forms.gle/ceFMBMkvyUKwxpms7) e explicar seu problema.",

	// "Se você quiser sugerir uma nova função, alteração de algo, ou qualquer coisa desse tipo, você pode entrar no nosso [formulário de feedbacks](https://forms.gle/ceFMBMkvyUKwxpms7) e enviar sua sugestão.",

	"Se você programa e deseja me ajudar, você pode fazer um fork do [repositório do projeto](http://github.com/feeeyli/froggsmp-website).",
];

export function HelpSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" className="border-r-0" innerClassName="size-8">
					<QuestionMark size="1.15rem" weight="bold" />
				</Button>
			</SheetTrigger>
			<SheetContent className="text-foreground sm:max-w-lg">
				<SheetHeader>
					<SheetTitle>Ajuda</SheetTitle>
					<SheetDescription>
						Ache a resposta pra algumas perguntas que você possa ter.
					</SheetDescription>
				</SheetHeader>
				<Accordion
					type="single"
					collapsible
					className="flex flex-col gap-2 mt-4"
				>
					{[
						"Posso utilizar minha conta da Twitch?",
						"Como ativo o chat?",
						"Oque significa as variações nos streamers?",
						// "Encontrei/estou tendo um erro!",
						// "Tenho uma sugestão!",
						"Quero ajudar o projeto, como posso fazer isso?",
					].map((title, i) => {
						return (
							<AccordionItem value={`item-${i}`} key={title}>
								<AccordionTrigger>{title}</AccordionTrigger>
								<AccordionContent asChild>
									<Markdown
										className="whitespace-pre-wrap first:[&_p]:mt-0 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:whitespace-normal [&_ul]:space-y-1 [&_ul]:list-['-_'] [&_li]:ml-5 [&_strong]:text-primary"
										options={{
											overrides: {
												a(props) {
													return (
														<Link
															href={props.href || "#"}
															className="text-primary hover:underline"
															target="_blank"
														>
															{props.children}
														</Link>
													);
												},
											},
										}}
									>
										{questions[i]}
									</Markdown>
								</AccordionContent>
							</AccordionItem>
						);
					})}
					{/* <AccordionItem value="item-1">
						<AccordionTrigger>
							Posso utilizar minha conta da Twitch?
						</AccordionTrigger>
						<AccordionContent asChild>
							<Markdown>{questions[0]}</Markdown>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Como ativo o chat?</AccordionTrigger>
						<AccordionContent>
							<Markdown>{questions[1]}</Markdown>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>
							Oque significa as variações nos streamers?
						</AccordionTrigger>
						<AccordionContent>
							<Markdown>{questions[2]}</Markdown>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>Encontrei/estou tendo um erro!</AccordionTrigger>
						<AccordionContent>
							<Markdown>{questions[3]}</Markdown>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger>Tenho uma sugestão!</AccordionTrigger>
						<AccordionContent>
							<Markdown>{questions[4]}</Markdown>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-6">
						<AccordionTrigger>
							Quero ajudar o projeto, como posso fazer isso?
						</AccordionTrigger>
						<AccordionContent>
							<Markdown>{questions[5]}</Markdown>
						</AccordionContent>
					</AccordionItem> */}
				</Accordion>
			</SheetContent>
		</Sheet>
	);
}
