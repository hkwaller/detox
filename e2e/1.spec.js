describe('One', () => {
  it('should see the header text', async () => {
    await element(by.id('buttonOne')).tap()
    await expect(element(by.id('headerText'))).toBeVisible()
  })

  it('should change text when tapping the button', async () => {
    await element(by.id('button')).tap()
    await expect(element(by.id('headerText'))).toHaveText(
      'Skikkelig skikkelig fin tekst',
    )
  })

  it('should change text when long tapping the button', async () => {
    await element(by.id('button')).longPress()
    await expect(element(by.id('headerText'))).toHaveText('Langtrykk tekst')
  })
})
