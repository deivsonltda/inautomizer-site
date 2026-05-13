import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Film,
  Image as ImageIcon,
  CalendarDays,
  Users,
  History,
  AlertTriangle,
  LayoutDashboard,
  FolderOpen,
  Sparkles,
  Check,
  Smartphone,
  Monitor,
} from "lucide-react";
import logo from "@/assets/logo.png";
import dashboard from "@/assets/dashboard.png";
import phoneMockup from "@/assets/phone-mockup.jpg";
import laptopMockup from "@/assets/laptop-mockup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InAutomizer — Automação e agendamento para Instagram" },
      {
        name: "description",
        content:
          "Agende posts, reels e stories, gerencie suas contas conectadas e organize sua presença no Instagram com o InAutomizer.",
      },
      { property: "og:title", content: "InAutomizer — Automação para Instagram" },
      {
        property: "og:description",
        content: "Plataforma simples e moderna para agendar e organizar publicações no Instagram.",
      },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Calendar, color: "bg-[var(--pastel-yellow)] text-amber-700", title: "Agendamento de Posts", text: "Programe suas publicações com antecedência e mantenha seu perfil sempre ativo, mesmo quando você estiver longe." },
  { icon: Film, color: "bg-[var(--pastel-lilac)] text-purple-700", title: "Agendamento de Reels", text: "Organize seus vídeos curtos e publique seus reels no momento ideal para alcançar mais pessoas." },
  { icon: CalendarDays, color: "bg-[var(--pastel-blue)] text-blue-700", title: "Calendário de Conteúdo", text: "Visualize suas publicações futuras em um calendário simples, organizado e fácil de usar." },
  { icon: Users, color: "bg-[var(--pastel-green)] text-emerald-700", title: "Contas Conectadas", text: "Gerencie suas contas do Instagram conectadas em um painel centralizado, com acesso rápido às principais informações." },
  { icon: History, color: "bg-[var(--pastel-orange)] text-orange-700", title: "Histórico de Publicações", text: "Acompanhe tudo que já foi publicado, visualize status e tenha mais controle sobre sua rotina de conteúdo." },
  { icon: AlertTriangle, color: "bg-[var(--pastel-pink)] text-rose-600", title: "Monitoramento de Falhas", text: "Identifique publicações com erro, acompanhe tentativas e mantenha o controle do que precisa de atenção." },
  { icon: LayoutDashboard, color: "bg-[var(--pastel-blue)] text-blue-700", title: "Dashboard Inteligente", text: "Veja métricas importantes como contas conectadas, posts agendados, publicações realizadas e falhas recentes." },
  { icon: FolderOpen, color: "bg-[var(--pastel-yellow)] text-amber-700", title: "Biblioteca de Mídias", text: "Organize imagens, vídeos e legendas para facilitar a criação e o agendamento dos seus conteúdos." },
  { icon: Sparkles, color: "bg-[var(--pastel-lilac)] text-purple-700", title: "Organização de Conteúdo", text: "Tenha uma rotina mais produtiva com seus posts, reels e stories organizados em um só lugar." },
];

const plans = [
  {
    name: "Free",
    price: "R$ 0,00",
    period: "",
    features: [
      "1 conta conectada",
      "Agendamento de posts",
      "Calendário de conteúdo",
      "Histórico de publicações",
      "Recursos básicos",
      "Plano gratuito",
    ],
  },
  {
    name: "Essencial",
    price: "R$ 29,90",
    period: "/mês",
    features: [
      "Até 3 contas conectadas",
      "Agendamento de posts",
      "Agendamento de reels",
      "Agendamento de stories",
      "Biblioteca de mídias",
      "Dashboard com métricas",
      "Suporte básico",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 79,90",
    period: "/mês",
    features: [
      "Até 10 contas conectadas",
      "Posts, reels e stories ilimitados",
      "Calendário avançado",
      "Histórico completo",
      "Monitoramento de falhas",
      "Biblioteca de mídias",
      "Suporte prioritário",
    ],
  },
  {
    name: "Premium",
    price: "R$ 147,90",
    period: "/mês",
    features: [
      "Contas conectadas ilimitadas",
      "Agendamentos ilimitados",
      "Dashboard completo",
      "Biblioteca avançada de mídias",
      "Monitoramento de falhas",
      "Gestão para equipes",
      "Suporte premium",
    ],
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="InAutomizer" className="h-8 w-8" />
          <span className="font-semibold text-lg tracking-tight">InAutomizer</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#inicio" className="hover:text-foreground transition">Início</a>
          <a href="#funcionalidades" className="hover:text-foreground transition">Funcionalidades</a>
          <a href="#destaques" className="hover:text-foreground transition">Destaques</a>
          <a href="#preco" className="hover:text-foreground transition">Preço</a>
        </nav>
        <a
          href="https://app.inautomizer.shop"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Login
        </a>
      </div>
    </header>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground/90 max-w-4xl mx-auto leading-[1.15]">
            Automatize e organize suas publicações no Instagram com mais praticidade.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende posts, reels e stories, acompanhe suas publicações futuras e gerencie suas contas
            conectadas em uma plataforma simples, moderna e eficiente.
          </p>
          <div className="mt-14">
            <img
              src={dashboard}
              alt="Dashboard do InAutomizer"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl ring-1 ring-black/5"
              width={1482}
              height={672}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-background rounded-t-[50%]" />
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Recursos poderosos</h2>
            <p className="mt-3 text-muted-foreground">
              Tudo que você precisa para organizar sua presença no Instagram
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-md transition"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${f.color}`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTO */}
      <section className="px-6 pb-24">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center"
          style={{ background: "var(--testimonial-gradient)" }}
        >
          <h3 className="text-lg font-semibold">Anderson</h3>
          <p className="text-sm text-muted-foreground">C.O</p>
          <p className="mt-6 text-sm md:text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            “Com o InAutomizer, simplificamos a forma de planejar, organizar e publicar conteúdos no
            Instagram. A plataforma foi criada para entregar praticidade, controle e eficiência em
            uma experiência simples, fluida e moderna. Cada detalhe foi pensado para ajudar
            criadores, social medias e negócios a manterem uma presença constante, profissional e
            estratégica.”
          </p>
          <img src={logo} alt="InAutomizer" className="h-10 w-10 mx-auto mt-8" />
        </div>
      </section>

      {/* DESTAQUES */}
      <section id="destaques" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Poderoso em Todo Lugar</h2>
            <p className="mt-3 text-muted-foreground">responsividade e praticidade</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="rounded-3xl bg-[var(--pastel-lilac)] p-10 flex justify-center">
              <img
                src={phoneMockup}
                alt="App mobile InAutomizer"
                loading="lazy"
                width={1024}
                height={1024}
                className="max-h-96 w-auto object-contain"
              />
            </div>
            <div>
              <div className="w-11 h-11 rounded-xl bg-[var(--pastel-lilac)] text-purple-700 flex items-center justify-center mb-5">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Use onde quiser</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acesse o InAutomizer pelo computador ou celular e acompanhe seus agendamentos de onde
                estiver. Organize conteúdos, veja publicações futuras e mantenha sua rotina do
                Instagram sempre sob controle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-1 order-2">
              <div className="w-11 h-11 rounded-xl bg-[var(--pastel-yellow)] text-amber-700 flex items-center justify-center mb-5">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sistema web</h3>
              <p className="text-muted-foreground leading-relaxed">
                O InAutomizer é um sistema web intuitivo, rápido e eficiente, criado para facilitar o
                gerenciamento de publicações no Instagram. Uma solução simples para quem precisa
                economizar tempo, manter consistência e trabalhar com mais organização.
              </p>
            </div>
            <div className="lg:order-2 order-1 rounded-3xl bg-[var(--pastel-yellow)] p-10 flex justify-center">
              <img
                src={laptopMockup}
                alt="Sistema web InAutomizer"
                loading="lazy"
                width={1280}
                height={896}
                className="max-h-80 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PREÇO */}
      <section id="preco" className="py-24 px-6 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Preço incomparável</h2>
            <p className="mt-3 text-muted-foreground">Planos simples para diferentes necessidades</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-card rounded-2xl border border-border/60 p-7 flex flex-col shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-center text-base font-semibold">{plan.name}</h3>
                <div className="text-center mt-5 mb-6">
                  <span className="text-2xl font-semibold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground"> {plan.period}</span>
                  )}
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-7 w-full bg-primary text-primary-foreground rounded-lg py-2.5 text-sm font-medium hover:opacity-90 transition">
                  Contratar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="flex items-center gap-2">
            <img src={logo} alt="InAutomizer" className="h-8 w-8" />
            <span className="font-semibold">InAutomizer</span>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacidade" className="hover:text-foreground">Políticas de Privacidade</Link></li>
              <li><Link to="/termos" className="hover:text-foreground">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
