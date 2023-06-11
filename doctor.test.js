describe('Simulating doctor functionalities', () => {
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
    await element(by.placeholder('exemplo@email.com.br'))typeText('doctor@bol.com.br');
    await element(by.placeholder('Senha')).tap();
    await element(by.placeholder('Senha')).typeText('123456');

    await element(by.text('Entrar')).tap();
  	await expect(element(by.text('Bem vindo ao menu'))).toBeVisible();
  });

  it('should create medical report successfully', async () => {
    await element(by.text('Cadastrar consulta')).tap();

    await element(by.text('patient')).tap(); //clicar elemento com o nome do cliente em questão
    await element(by.placeholder('Amamnesis')).tap();
    await element(by.placeholder('Amamnesis')).typeText('Doente');
    await element(by.placeholder('Comentário')).tap();
    await element(by.placeholder('Comentário')).typeText('Fazer tratamento');

    await element(by.text('Cadastrar')).tap();
    await expect(element(by.text('consulta com sucesso'))).toBeVisible();
  });

  it('should show all medical reports of the doctor successfully', async () => {
    await element(by.text('Ver consultas')).tap();
    await expect(element(by.title('Editar consulta'))).toBeVisible();
  });
});
