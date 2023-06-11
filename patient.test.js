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
    await element(by.placeholder('exemplo@email.com.br'))typeText('patient@bol.com.br');
    await element(by.placeholder('Senha')).tap();
    await element(by.placeholder('Senha')).typeText('123456');

    await element(by.text('Entrar')).tap();
  	await expect(element(by.text('Bem vindo ao menu'))).toBeVisible();
  });

  it('should show all medical reports of the patient successfully', async () => {
    await element(by.text('Consultar prontuário')).tap();
    await expect(element(by.text('Medico'))).toBeVisible();
    await expect(element(by.text('Enfermeira(o)'))).toBeVisible();
  });
});
