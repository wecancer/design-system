import html5EmailValidate from './html5-email-validate'

describe('Validations', () => {
  it('should validate valid emails', () => {
    const dotPattern = 'user.name'
    const snakePattern = 'user_name'
    const kebabPattern = 'user-name'
    const numberPattern = 'us4rn4m3'

    expect(html5EmailValidate('test@test')).toBeTruthy()
    expect(html5EmailValidate('username@gmail.com.br')).toBeTruthy()
    expect(html5EmailValidate('u@email.cc')).toBeTruthy()
    expect(html5EmailValidate('username@192.168.0.1')).toBeTruthy()

    expect(html5EmailValidate(`${dotPattern}@email`)).toBeTruthy()
    expect(html5EmailValidate(`${snakePattern}@email`)).toBeTruthy()
    expect(html5EmailValidate(`${kebabPattern}@email`)).toBeTruthy()
    expect(html5EmailValidate(`${numberPattern}@email`)).toBeTruthy()

    expect(html5EmailValidate(`user@${dotPattern}`)).toBeTruthy()
    expect(html5EmailValidate(`user@${kebabPattern}`)).toBeTruthy()
    expect(html5EmailValidate(`user@${numberPattern}`)).toBeTruthy()
  })

  it('should validate invalid emails', () => {
    const validDomain = 'email.com.br'

    expect(html5EmailValidate(`(testing)@${validDomain}`)).toBeFalsy()
    expect(html5EmailValidate(`!@#$%*@${validDomain}`)).toBeFalsy()
    expect(html5EmailValidate(`u\\ser@"${validDomain}"`)).toBeFalsy()
    expect(html5EmailValidate(`/usr/bin@"${validDomain}"`)).toBeFalsy()
    expect(html5EmailValidate(`name@my_invalid_domain`)).toBeFalsy()
    expect(html5EmailValidate(`name@192/168/0/1`)).toBeFalsy()
    expect(html5EmailValidate(`name@192 168 0 1`)).toBeFalsy()
    expect(html5EmailValidate(`u@'email`)).toBeFalsy()
    expect(html5EmailValidate(`"user"@"email"`)).toBeFalsy()
    expect(html5EmailValidate(`user@/opt/wecancer`)).toBeFalsy()
  })
})
