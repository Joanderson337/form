import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, ConatinerStep, ContentBtn, ContentInput, ContentTitle, ContextoStep, Form } from './styled';
import { CustomInput } from '../CustomInput/customInput';
import { useNavigate } from 'react-router-dom';
import { validateCNPJ, validateCPF } from 'validations-br';
import { toast } from 'react-toastify';

type FormData = {
  nome_marca: string
  nome_operacao: string

  cnpj_empresa: string
  razao_social: string
  anexo_cnpj_cartao: FileList
  representante_name: string
  representante_cpf: string
  anexo_documento_socio: FileList

  identidade_cor_primaria: string
  identidade_cor_secundaria: string
  anexo_logo: FileList
  anexo_logo_vetor: FileList
  anexo_logo_branca: FileList

  apontamento_dominio: string

  email_gestao: string
};

const schema = yup.object().shape({

  nome_marca: yup.string().trim().required('O nome da marca é obrigatório'),
  nome_operacao: yup.string(),

  cnpj_empresa: yup.string().required('O CNPJ da empresa é obrigatório').test('cnpj', 'Por favor, inserir um CNPJ válido', value => validateCNPJ(value)),
  razao_social: yup.string().required('A razão social é obrigatório'),
  anexo_cnpj_cartao: yup
    .mixed()
    .test('has-file', 'O anexo é obrigatório', (value) => {
      return value instanceof FileList && value.length > 0;
    }),
  representante_name: yup.string().required('O representante legal é obrigatório'),
  representante_cpf: yup.string().required('O CPF do representante legal é obrigatório').test('cpf', 'Por favor, inserir um CPF válido', value => validateCPF(value)),
  anexo_documento_socio: yup
    .mixed()
    .test('has-file', 'O anexo é obrigatório', (value) => {
      return value instanceof FileList && value.length > 0;
    }),

  identidade_cor_primaria: yup.string()
    .required('A cor primaria da identidade visual é obrigatória')
    .matches(/^#/, 'A cor primaria deve começar com "#"'),
  identidade_cor_secundaria: yup.string()
    .required('A cor secundária da identidade visual é obrigatório')
    .matches(/^#/, 'A cor secundária deve começar com "#"'),
  anexo_logo: yup
    .mixed()
    .test('has-file', 'O anexo é obrigatório', (value) => {
      return value instanceof FileList && value.length > 0;
    }),
  anexo_logo_vetor: yup
    .mixed()
    .test('has-file', 'O anexo é obrigatório', (value) => {
      return value instanceof FileList && value.length > 0;
    }),
  anexo_logo_branca: yup
    .mixed()
    .test('has-file', 'O anexo é obrigatório', (value) => {
      return value instanceof FileList && value.length > 0;
    }),


  apontamento_dominio: yup.string().required('O apontamento do domínio é obrigatório'),

  email_gestao: yup.string().required('Por favor, informe os primeiros usuários que terão acesso ao ser portal'),
});

export function CustomForm() {

  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const handleSuccess = () => {
    navigate('/success');
  };

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {

    try {
      const formData = new FormData();
      formData.append('anexo_cnpj_cartao', data.anexo_cnpj_cartao[0]);
      formData.append('anexo_documento_socio', data.anexo_documento_socio[0]);
      formData.append('anexo_logo', data.anexo_logo[0]);
      formData.append('anexo_logo_vetor', data.anexo_logo_vetor[0]);
      formData.append('anexo_logo_branca', data.anexo_logo_branca[0]);

      console.log(data);
      console.log(formData);

      handleSuccess();
      toast.success('Formulario enviado com sucesso');
      methods.reset();
    }
    catch (error) {
      toast.success('Algo deu errado');
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>

        {step === 1 && (
          <ContextoStep>
            <ConatinerStep>

              <ContentTitle >
                <h1>Informações Iniciais</h1>
                <p>Para iniciarmos o processo de credenciamento e desenvolvimento do portal personalizado, precisamos saber qual o nome da sua marca e de qual operação faz parte (caso faça parte de alguma).</p>
              </ContentTitle>

              <ContentInput>
                <label htmlFor="name_marca">Qual nome da sua marca? (Ou o nome desejado para aparecer no portal)</label>
                <CustomInput
                  placeholder='Digite o nome da sua marca'
                  {...methods.register('nome_marca')}
                  hasError={!!methods.formState.errors.nome_marca}
                />
                {methods.formState.errors.nome_marca && <p>{methods.formState.errors.nome_marca.message}</p>}
              </ContentInput>

              <ContentInput>
                <label htmlFor="nome_operacao">Você faz parte de alguma operação? Se sim, informe o nome dela abaixo.</label>
                <CustomInput
                  placeholder='Digite o nome operação, se você fizer parte de alguma'
                  {...methods.register('nome_operacao')}
                  hasError={!!methods.formState.errors.nome_operacao}
                />
              </ContentInput>

              <ContentBtn>
                <Button type="button" onClick={handleHome}>
                  Cancelar
                </Button>
                <Button type="button" onClick={() => methods.trigger(['nome_marca']).then(isValid => isValid && setStep(2))}>
                  Seguinte
                </Button>
              </ContentBtn>

            </ConatinerStep>
          </ContextoStep>
        )}

        {step === 2 && (
          <>
            <ContextoStep>
              <ConatinerStep>

                <ContentTitle >
                  <h1>Informações Jurídicas</h1>
                  <p>Preencha corretamente as informações abaixo referente a sua empresa.</p>
                </ContentTitle>

                <ContentInput>
                  <label htmlFor="cnpj_empresa">Qual o CNPJ da empresa?</label>
                  <CustomInput
                    type={'number'}
                    {...methods.register('cnpj_empresa')}
                    hasError={!!methods.formState.errors.cnpj_empresa}
                  />
                  {methods.formState.errors.cnpj_empresa && <p>{methods.formState.errors.cnpj_empresa.message}</p>}
                </ContentInput>

                <ContentInput>
                  <label htmlFor="razao_social">Informe a Razão Social</label>
                  <CustomInput
                    {...methods.register('razao_social')}
                    hasError={!!methods.formState.errors.razao_social}
                  />
                  {methods.formState.errors.razao_social && <p>{methods.formState.errors.razao_social.message}</p>}
                </ContentInput>

                <ContentInput>
                  <label htmlFor="anexo_cnpj_cartao">Anexe o cartão CNPJ aqui.</label>
                  <CustomInput
                    type="file"
                    {...methods.register('anexo_cnpj_cartao')}
                    hasError={!!methods.formState.errors.anexo_cnpj_cartao}
                  />
                  {methods.formState.errors.anexo_cnpj_cartao && <p>{methods.formState.errors.anexo_cnpj_cartao.message}</p>}
                </ContentInput>


                <ContentInput>
                  <label htmlFor="representante_name">Qual o nome completo do representante legal?</label>
                  <CustomInput
                    {...methods.register('representante_name')}
                    hasError={!!methods.formState.errors.representante_name}
                  />
                  {methods.formState.errors.representante_name && <p>{methods.formState.errors.representante_name.message}</p>}
                </ContentInput>

                <ContentInput>
                  <label htmlFor="representante_cpf"> Qual o CPF do representante legal?</label>
                  <CustomInput
                    {...methods.register('representante_cpf')}
                    type={'number'}
                    hasError={!!methods.formState.errors.representante_cpf}
                  />
                  {methods.formState.errors.representante_cpf && <p>{methods.formState.errors.representante_cpf.message}</p>}
                </ContentInput>

                <ContentInput>
                  <label htmlFor="anexo_documento_socio">Anexe o documento do sócio que contenha o CPF aqui.</label>
                  <CustomInput
                    type="file"
                    {...methods.register('anexo_documento_socio')}
                    hasError={!!methods.formState.errors.anexo_documento_socio}
                  />
                  {methods.formState.errors.anexo_documento_socio && <p>{methods.formState.errors.anexo_documento_socio.message}</p>}
                </ContentInput>

                <ContentBtn>
                  <Button type="button" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                  <Button type="button" onClick={() => methods.trigger(['anexo_documento_socio','anexo_cnpj_cartao' ,'cnpj_empresa', 'razao_social', 'representante_name', 'representante_cpf']).then(isValid => isValid && setStep(3))}>
                  Seguinte
                  </Button>
                </ContentBtn>

              </ConatinerStep>
            </ContextoStep>
          </>
        )}

        {step === 3 && (
          <>
            <ContextoStep>
              <ConatinerStep>

                <ContentTitle >
                  <h1>Identidade Visual</h1>
                  <p>Precisamos que você forneça as informações base referente a
                    identidade visual de sua marca. É importante que os itens sejam preenchidos com atenção,
                     pois é a partir das informações que você nos fornecer que seu sistema terá a sua cara!</p>
                </ContentTitle>

                <ContentInput>
                  <label htmlFor="anexo_logo">Anexe aqui uma imagem em svg ou png da sua logo oficial.</label>
                  <CustomInput
                    type="file"
                    accept="image/png,image/svg+xml"
                    {...methods.register('anexo_logo')}
                    hasError={!!methods.formState.errors.anexo_logo}
                  />
                  {methods.formState.errors.anexo_logo && <p>{methods.formState.errors.anexo_logo.message}</p>}
                </ContentInput>

                <ContentInput>
                  <label htmlFor="anexo_logo_vetor">Anexe aqui a sua logo oficial em vetor (pdf, eps ou svg).</label>
                  <CustomInput
                    type="file"
                    accept="image/eps,application/pdf,image/svg+xml,.ia"
                    {...methods.register('anexo_logo_vetor')}
                    hasError={!!methods.formState.errors.anexo_logo_vetor}
                  />
                  {methods.formState.errors.anexo_logo_vetor && <p>{methods.formState.errors.anexo_logo_vetor.message}</p>}
                </ContentInput>

                <ContentInput>
                  <label htmlFor="anexo_logo_branca">Anexe aqui a sua logo na versão branca em vetor (pdf, eps ou svg).</label>
                  <CustomInput
                    type="file"
                    accept="image/eps,application/pdf,image/svg+xml,.ia"
                    {...methods.register('anexo_logo_branca')}
                    hasError={!!methods.formState.errors.anexo_logo_branca}
                  />

                  {methods.formState.errors.anexo_logo_branca && <p>{methods.formState.errors.anexo_logo_branca.message}</p>}
                </ContentInput>




                <ContentInput>
                  <label htmlFor="identidade_cor_primaria">
                    Informe a cor primária da sua identidade visual em formato de código hexadecimal. Ex: #1414B2
                    <br />
                    <br />
                    Caso não saiba a cor hexadecimal: <a href="https://g.co/kgs/kuJPV1" target='_blank' rel="noreferrer">clique aqui</a>
                  </label>
                  <CustomInput
                    placeholder=' Ex: #1414B2'
                    {...methods.register('identidade_cor_primaria')}
                    hasError={!!methods.formState.errors.identidade_cor_primaria}
                  />
                  {methods.formState.errors.identidade_cor_primaria && <p>{methods.formState.errors.identidade_cor_primaria.message}</p>}
                </ContentInput>

                <ContentInput>
                  <label htmlFor="identidade_cor_secundaria">
                    Informe a cor secundária da sua identidade visual em formato de código hexadecimal. Ex: #1414B2
                    <br />
                    <br />
                    Caso não saiba a cor hexadecimal: <a href="https://g.co/kgs/kuJPV1" target='_blank' rel="noreferrer">clique aqui</a>
                  </label>

                  <CustomInput
                    placeholder=' Ex: #1414B2'
                    {...methods.register('identidade_cor_secundaria')}
                    hasError={!!methods.formState.errors.identidade_cor_secundaria}
                  />
                  {methods.formState.errors.identidade_cor_secundaria && <p>{methods.formState.errors.identidade_cor_secundaria.message}</p>}
                </ContentInput>


                <ContentBtn>
                  <Button type="button" onClick={() => setStep(2)}>
                    Voltar
                  </Button>
                  <Button type="button" onClick={() => methods.trigger(['anexo_logo_branca','anexo_logo_vetor','anexo_logo','identidade_cor_primaria', 'identidade_cor_secundaria']).then(isValid => isValid && setStep(4))}>
                  Seguinte
                  </Button>
                </ContentBtn>

              </ConatinerStep>
            </ContextoStep>
          </>
        )}

        {step === 4 && (
          <>
            <ContextoStep>
              <ConatinerStep>

                <ContentTitle >
                  <h1>Configuração de Domínio</h1>
                  <p>Outro ponto importante para a criação do portal personalizado é o apontamento do domínio de sua marca realizado corretamente. Segue instruções base de como fazer o apontamento:
                    <br />
                    <br />
                    • Adicionar FOEDI4 como responsável técnico dentro da conta do registro.br;
                    <br />
                    <br />
                    • Caso a hospedagem do domínio principal seja administrado por nossa equipe, deve-se mudar o servidor DNS para ns3.stalo.digital e ns4.stalo.digital.
                    <br />
                    <br />
                    • Caso a hospedagem do servidor DNS não esteja dentro dos nossos servidores, precisa-se criar alguns apontamentos Tipo A para 207.244.238.80.
                    <br />
                    <br />
                    Exemplo:
                      portal.SEUDOMINIO.COM.BR 14400 IN A 207.244.238.80.
                  </p>
                </ContentTitle>

                <ContentInput>
                  <label htmlFor="apontamento_dominio">Qual o domínio você realizou o apontamento?</label>
                  <CustomInput
                    {...methods.register('apontamento_dominio')}
                    hasError={!!methods.formState.errors.apontamento_dominio}
                  />
                  {methods.formState.errors.apontamento_dominio && <p>{methods.formState.errors.apontamento_dominio.message}</p>}
                </ContentInput>



                <ContentBtn>
                  <Button type="button" onClick={() => setStep(3)}>
                    Voltar
                  </Button>
                  <Button type="button" onClick={() => methods.trigger(['apontamento_dominio']).then(isValid => isValid && setStep(5))}>
                  Seguinte
                  </Button>
                </ContentBtn>

              </ConatinerStep>
            </ContextoStep>
          </>
        )}

        {step === 5 && (
          <>
            <ContextoStep>
              <ConatinerStep>

                <ContentTitle >
                  <h1>Gestão de Acessos</h1>
                  <p>Por último, precisamos que informe os primeiros usuários que terão acesso ao ser portal. Existem dois níveis de acesso: Admin e Operador. Os Admins gerenciam todas as taxas e estrutura da operação. Os operadores apenas visualizam, mas não podem editar.</p>
                </ContentTitle>

                <ContentInput>
                  <label htmlFor="email_gestao">Informe os primeiros e-mails de acesso ao portal separados por vírgulas e com seus respectivos cargos.
                    <br />
                    <br />
                  Exemplo: Admins - gustavo@confrapag.com.br, fernanda@gmail.com. Operadores - julia@gmail.com, ricardo@confrapag.com.br</label>
                  <CustomInput

                    {...methods.register('email_gestao')}
                    hasError={!!methods.formState.errors.email_gestao}
                  />
                  {methods.formState.errors.email_gestao && <p>{methods.formState.errors.email_gestao.message}</p>}
                </ContentInput>



                <ContentBtn>
                  <Button type="button" onClick={() => setStep(4)}>
                    Voltar
                  </Button>
                  <Button type="submit" onClick={() => methods.trigger(['email_gestao'])}>
                    Enviar
                  </Button>
                </ContentBtn>

              </ConatinerStep>
            </ContextoStep>
          </>
        )}
      </Form>
    </FormProvider>
  );
}
