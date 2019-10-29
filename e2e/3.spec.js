describe('Three', () => {
  it('should input text', async () => {
    await device.reloadReactNative()
    await element(by.id('buttonThree')).tap()
    await element(by.id('input')).typeText('sup')
    await expect(element(by.id('input'))).toHaveText('sup')
  })

  it('should replace input text', async () => {
    await element(by.id('input')).replaceText('trying again')
    await expect(element(by.id('input'))).toHaveText('trying again')
  })

  it('should clear text', async () => {
    await element(by.id('input')).clearText()
    await expect(element(by.id('input'))).toHaveText('')
  })
})
