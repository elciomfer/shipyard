import { Button, buttonVariants } from "@shipyard/ui/components/button";

const services = [
  {
    title: "Site no ar",
    description:
      "Landing pages rápidas, responsivas e com a cara do seu negócio, hospedadas e monitoradas por nós.",
  },
  {
    title: "Domínio e e-mail profissional",
    description:
      "Registro do domínio no CNPJ da sua empresa e e-mails como contato@suaempresa.com.br, configurados e mantidos.",
  },
  {
    title: "Manutenção mensal",
    description:
      "Trocas de texto, horários e fotos, renovações e suporte quando algo der errado. Você não precisa se preocupar com a parte técnica.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-heading text-xl font-semibold">
            shipyard<span className="text-highlight">_</span>
          </span>
          <nav className="flex items-center gap-2">
            <a href="#sobre" className={buttonVariants({ variant: "ghost" })}>
              Sobre
            </a>
            <a href="#contato" className={buttonVariants({ variant: "ghost" })}>
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 py-24">
        <h1 className="font-heading max-w-3xl text-5xl leading-tight font-semibold md:text-6xl">
          Construímos o site da sua empresa e cuidamos dele depois que ele
          zarpa.
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
          Site, domínio, hospedagem e e-mail profissional em um só lugar, com
          manutenção mensal para você focar no seu negócio.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#contato" className={buttonVariants({ size: "lg" })}>
            Pedir um orçamento
          </a>
          <a
            href="#sobre"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Ver o que fazemos
          </a>
        </div>
      </section>

      <section id="sobre" className="bg-card border-y">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-heading text-3xl font-semibold">Sobre nós</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            A Shipyard atende pequenas empresas que precisam de presença online
            sem complicação. Entregamos o site pronto e seguimos responsáveis
            por ele: hospedagem, domínio, e-mails e ajustes do dia a dia.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="border-l-2 border-primary pl-5"
              >
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="dark bg-background text-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-heading text-3xl font-semibold">Contato</h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Conte rapidamente o que sua empresa precisa e respondemos em até um
            dia útil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:contato@shipyard.com.br"
              className={buttonVariants({ size: "lg" })}
            >
              Enviar e-mail
            </a>
            <Button variant="secondary" size="lg">
              Chamar no WhatsApp
            </Button>
            <Button
              className="bg-highlight text-highlight-foreground hover:bg-highlight/90"
              size="lg"
            >
              Botão de destaque
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="text-muted-foreground mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-6 py-6 text-sm">
          <span>Shipyard, sites para pequenas empresas</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
