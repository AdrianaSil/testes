describe('Simulating admin functionalities', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have button to grant access to the system', async () => {
    await expect(element(by.title('Acessar o sistema'))).toBeVisible();
  });

  it('should show login screen after tap', async () => {
    await element(by.title('Acessar o sistema')).tap();
    await expect(element(by.text('Email'))).toBeVisible();
  });

  it('should login successfully', async () => {
  	await element(by.placeholder('exemplo@email.com.br')).tap();
    await element(by.placeholder('exemplo@email.com.br')).typeText('wesley@bol.com');
    await element(by.placeholder('Senha')).tap();
    await element(by.placeholder('Senha')).typeText('123456');

    await element(by.text('Entrar')).tap();
  	await expect(element(by.text('Bem vindo ao menu'))).toBeVisible();
  });

  it('should add doctor successfully', async () => {
   	await element(by.text('Cadastrar médico')).tap();

  	await element(by.placeholder('Nome de usuário')).tap();
  	await element(by.placeholder('Nome de usuário')).typeText('doctor');
   	await element(by.placeholder('Email')).tap();
    await element(by.placeholder('Email')).typeText('doctor@bol.com.br');
    await element(by.placeholder('Senha')).tap();
    await element(by.placeholder('Senha')).typeText('123456');
    await element(by.placeholder('Telefone')).tap();
    await element(by.placeholder('Telefone')).typeText(88988888888);
    await element(by.placeholder('Sexo')).tap();
    await element(by.placeholder('Sexo')).typeText(false);
    await element(by.placeholder('CRM')).tap();
    await element(by.placeholder('CRM')).typeText('111111');
    await element(by.placeholder('Especialidade')).tap();
    await element(by.placeholder('Especialidade')).typeText('geral');

    await element(by.text('Cadastrar')).tap();
   	await expect(element(by.text('Medico criado com sucesso'))).toBeVisible();
  });

  it('should add nurse successfully', async () => {
    await element(by.text('Cadastrar enfermeira(o)')).tap();

    await element(by.placeholder('Nome de usuário')).tap();
    await element(by.placeholder('Nome de usuário')).typeText('nurse');
    await element(by.placeholder('Email')).tap();
    await element(by.placeholder('Email')).typeText('nurse@bol.com.br');
    await element(by.placeholder('Senha')).tap();
    await element(by.placeholder('Senha')).typeText('123456');
    await element(by.placeholder('Telefone')).tap();
    await element(by.placeholder('Telefone')).typeText(88988888888);
    await element(by.placeholder('Sexo')).tap();
    await element(by.placeholder('Sexo')).typeText(false);
    await element(by.placeholder('COREN')).tap();
    await element(by.placeholder('COREN')).typeText('222222');
    await element(by.placeholder('Especialidade')).tap();
    await element(by.placeholder('Especialidade')).typeText('geral');

    await element(by.text('Cadastrar')).tap();
    await expect(element(by.text('Enfermeira criado com sucesso'))).toBeVisible();
  });

  it('should add user successfully', async () => {
    await element(by.text('Cadastrar paciente')).tap();

    await element(by.placeholder('Nome de usuário')).tap();
    await element(by.placeholder('Nome de usuário')).typeText('patient');
    await element(by.placeholder('Email')).tap();
    await element(by.placeholder('Email')).typeText('patient@bol.com.br');
    await element(by.placeholder('Senha')).tap();
    await element(by.placeholder('Senha')).typeText('123456');
    await element(by.placeholder('Telefone')).tap();
    await element(by.placeholder('Telefone')).typeText(88988888888);
    await element(by.placeholder('Sexo')).tap();
    await element(by.placeholder('Sexo')).typeText(false);
    await element(by.placeholder('Endereço')).tap();
    await element(by.placeholder('Endereço')).typeText('rua ali');

    await element(by.text('Cadastrar')).tap();
    await expect(element(by.text('Paciente criado com sucesso'))).toBeVisible();
  });

  it('should show all users successfully', async () => {
    await element(by.text('Ver usuários do sistema')).tap();
    await expect(element(by.title('Editar'))).toBeVisible();
  });
});