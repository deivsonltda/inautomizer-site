import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  component: () => (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground transition"
        >
          ← Voltar
        </Link>

        <h1 className="text-4xl font-semibold mt-6 tracking-tight">
          Termos de Serviço
        </h1>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          Ao acessar e utilizar o InAutomizer, você concorda com os presentes
          Termos de Serviço. Leia atentamente este documento antes de utilizar
          nossa plataforma.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              1. Sobre o InAutomizer
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O InAutomizer é uma plataforma desenvolvida para auxiliar usuários
              na organização, gerenciamento e agendamento de conteúdos para o
              Instagram, oferecendo ferramentas que facilitam a produtividade e
              o planejamento de publicações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Uso da plataforma
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Ao utilizar o InAutomizer, o usuário concorda em utilizar a
              plataforma de forma responsável, ética e em conformidade com as
              políticas e diretrizes do Instagram e demais legislações
              aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. Conta do usuário
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O usuário é responsável por manter a confidencialidade de suas
              credenciais de acesso, bem como por todas as atividades realizadas
              em sua conta dentro da plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Disponibilidade do serviço
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O InAutomizer busca manter a plataforma disponível e estável,
              porém não garante funcionamento ininterrupto ou livre de falhas.
              Atualizações, manutenções e eventuais indisponibilidades podem
              ocorrer periodicamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Limitação de responsabilidade
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O InAutomizer não se responsabiliza por prejuízos decorrentes do
              uso inadequado da plataforma, falhas externas de terceiros,
              alterações em políticas das redes sociais ou interrupções fora do
              nosso controle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              6. Suspensão e encerramento
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de suspender ou encerrar contas que violem
              estes Termos de Serviço, utilizem a plataforma de forma abusiva ou
              pratiquem atividades consideradas ilegais ou prejudiciais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              7. Alterações nos termos
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Estes Termos de Serviço poderão ser atualizados periodicamente
              para refletir melhorias na plataforma, mudanças legais ou ajustes
              operacionais. O uso contínuo do serviço representa concordância
              com as versões atualizadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              8. Contato
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Caso tenha dúvidas sobre estes Termos de Serviço, entre em contato
              através dos canais oficiais do InAutomizer.
            </p>
          </section>
        </div>
      </div>
    </div>
  ),
});