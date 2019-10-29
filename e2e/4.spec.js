describe('Four', () => {
  it('should increase to one', async () => {
    await device.reloadReactNative()
    await element(by.id('buttonFour')).tap()

    await element(by.id('increaseButton')).tap()
    await expect(element(by.id('increasedValue'))).toHaveText('1')
  })

  it('should increase to 9', async () => {
    await element(by.id('increaseButton')).multiTap(8)
    await expect(element(by.id('increasedValue'))).toHaveText('9')
  })
})
