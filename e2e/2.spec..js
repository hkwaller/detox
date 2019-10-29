describe('Two', () => {
  it('should see the header text', async () => {
    await device.reloadReactNative()
    await element(by.id('buttonTwo')).tap()
    await expect(element(by.id('headerText'))).toBeVisible()
  })

  it('should scroll to bottom and see Nicholas', async () => {
    await element(by.id('scrollView')).scrollTo('bottom')
    await expect(element(by.id('nicholas'))).toBeVisible()
  })
})
