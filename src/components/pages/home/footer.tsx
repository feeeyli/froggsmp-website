export function Footer() {
	return (
		<footer className="bg-black text-white px-8 md:px-20 lg:px-36 py-6 md:py-12 leading-5">
			<p>
				Feito com <span className="text-xs">💚</span> por{" "}
				<a
					href="https://x.com/feeeyli"
					className="text-primary hover:underline underline-offset-4"
				>
					feyli
				</a>
				, para toda comunidade da Frogg!
			</p>
			<p className="mt-4">
				Este site não é oficial e não tem nenhuma filiação com a FroggTV.
			</p>
		</footer>
	);
}
