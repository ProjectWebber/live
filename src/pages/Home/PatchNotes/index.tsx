const PatchNotes = () => {
    return (
        <section className="px-screen-responsive mb-10">
            <h2 className="text-foreground mb-1 text-3xl">Notas da Atualização (v0.2)</h2>
            <section className="flex flex-col gap-4 md:flex-row md:gap-10">
                <section className="bg-primary/20 w-full max-w-120 rounded-2xl p-4 shadow-lg backdrop-blur-sm backdrop-grayscale">
                    <div className="border-b-foreground mb-2 border-b-2">
                        <h3 className="text-foreground text-2xl">Novo</h3>
                    </div>
                    <ul className="list-inside list-disc">
                        <h3 className="text-foreground text-xl">Assets:</h3>
                        <li className="text-foreground-muted">3 camisas para ambos os corpos.</li>
                        <li className="text-foreground-muted">4 assets para todas as categorias.</li>
                    </ul>
                    <br />
                    <ul className="list-inside list-disc">
                        <h3 className="text-foreground text-xl">Sistema:</h3>
                        <li className="text-foreground-muted">Menus de aviso e notificações de ações.</li>
                        <li className="text-foreground-muted">Pagina de "Meus Personagens".</li>
                        <li className="text-foreground-muted">Sistema de salvamento de personagens.</li>
                    </ul>
                </section>
                <section className="bg-warning/20 w-full max-w-120 rounded-2xl p-4 shadow-lg backdrop-blur-sm backdrop-grayscale">
                    <div className="border-b-foreground mb-2 border-b-2">
                        <h3 className="text-foreground text-2xl">Correções</h3>
                    </div>
                    <ul className="list-inside list-disc">
                        <h3 className="text-foreground text-xl">Assets:</h3>
                        <li className="text-foreground-muted">Melhor renderização nos assets.</li>
                    </ul>
                    <br />
                    <ul className="list-inside list-disc">
                        <h3 className="text-foreground text-xl">Sistema:</h3>
                        <li className="text-foreground-muted">Polimento de cores, animações e layout.</li>
                        <li className="text-foreground-muted">Filtros de assets por corpo.</li>
                        <li className="text-foreground-muted">Scroll do mouse funcionando na seleção.</li>
                    </ul>
                </section>
                <section className="w-full max-w-120 rounded-2xl bg-pink-400/20 p-4 shadow-lg backdrop-blur-sm backdrop-grayscale">
                    <div className="border-b-foreground mb-2 border-b-2">
                        <h3 className="text-foreground text-2xl">Proxima Atualização</h3>
                    </div>
                    <ul className="list-inside list-disc">
                        <h3 className="text-foreground text-xl">Assets:</h3>
                        <li className="text-foreground-muted">Cores!</li>
                        <li className="text-foreground-muted">Categoria "Roupas de sobreposição".</li>
                        <li className="text-foreground-muted">Mais detalhamento nas imagens.</li>
                    </ul>
                    <br />
                    <ul className="list-inside list-disc">
                        <h3 className="text-foreground text-xl">Sistema:</h3>
                        <li className="text-foreground-muted">Mudança de cor pelo usuário.</li>
                        <li className="text-foreground-muted">Temas para o site.</li>
                        <li className="text-foreground-muted">Configurações extras.</li>
                    </ul>
                    <ul className="list-inside list-disc"></ul>
                </section>
            </section>
        </section>
    );
};

export default PatchNotes;
