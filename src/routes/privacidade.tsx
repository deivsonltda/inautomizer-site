import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
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
          Política de Privacidade
        </h1>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          O InAutomizer valoriza a privacidade e a segurança dos seus usuários.
          Esta Política de Privacidade explica como coletamos, utilizamos,
          armazenamos e protegemos suas informações ao utilizar nossa plataforma.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              1. Informações coletadas
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Podemos coletar informações fornecidas diretamente por você,
              incluindo nome, endereço de e-mail, dados de autenticação,
              informações relacionadas às contas conectadas do Instagram e
              preferências de utilização da plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Uso das informações
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              As informações coletadas são utilizadas exclusivamente para
              fornecer, melhorar e personalizar os serviços oferecidos pelo
              InAutomizer, incluindo funcionalidades de agendamento,
              gerenciamento e organização de publicações no Instagram.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. Compartilhamento de dados
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O InAutomizer não vende informações pessoais dos usuários.
              Eventualmente, alguns dados poderão ser compartilhados apenas
              quando necessário para funcionamento técnico da plataforma,
              cumprimento de obrigações legais ou integração com serviços
              oficiais utilizados pelo sistema.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Segurança das informações
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Utilizamos medidas técnicas e organizacionais para proteger os
              dados dos usuários contra acessos não autorizados, alterações,
              divulgação ou destruição indevida das informações armazenadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Cookies e tecnologias similares
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O InAutomizer pode utilizar cookies e tecnologias semelhantes para
              melhorar a experiência de navegação, analisar métricas de uso e
              otimizar funcionalidades da plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              6. Responsabilidades do usuário
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O usuário é responsável por manter suas credenciais seguras e por
              utilizar a plataforma em conformidade com os termos das redes
              sociais e legislações aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              7. Alterações nesta política
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir melhorias, alterações técnicas ou mudanças legais.
              Recomendamos a revisão regular deste documento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              8. Contato
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Em caso de dúvidas relacionadas à privacidade ou ao tratamento de
              dados, entre em contato através dos canais oficiais do
              InAutomizer.
            </p>
          </section>
        </div>
      </div>
    </div>
  ),
});