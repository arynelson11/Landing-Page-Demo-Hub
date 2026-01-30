export function Footer() {
    return (
        <footer className="border-t border-zinc-100 bg-white py-12 text-center">
            <div className="container mx-auto px-4 space-y-4">
                <p className="font-semibold text-zinc-950 tracking-tight">aiomotionstudio</p>
                <p className="text-sm text-zinc-500">Design. Estratégia. Conversão.</p>
                <p className="text-xs text-zinc-300 pt-8">
                    &copy; {new Date().getFullYear()} AIO Motion Studio. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
