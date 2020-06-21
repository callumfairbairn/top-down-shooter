import { updateKeyPressedFirst } from './updateKeyPressedFirst'

describe('updateKeyPressedFirst', () => {
  it('sets everything in keyPressedFirst to false if everything in keyObj is false', () => {
    const keyObj = { w: false, a: false, s: false, d: false }
    const keyPressedFirst = { w: true, a: true, s: true, d: true }

    updateKeyPressedFirst(keyObj, keyPressedFirst)

    expect(keyPressedFirst).toEqual({ w: false, a: false, s: false, d: false })
  })

  it('if something in keyObj is true, set the corresponding value in keyPressedFirst to be true', () => {
    const keyObj = { w: true, a: false, s: false, d: false }
    const keyPressedFirst = { w: false, a: false, s: false, d: false }

    updateKeyPressedFirst(keyObj, keyPressedFirst)

    expect(keyPressedFirst).toEqual({ w: true, a: false, s: false, d: false })
  })

  it('if something in keyObj is true, set the corresponding value in keyPressedFirst to be true unless the opposite value is already true', () => {
    const keyObj = { w: true, a: false, s: true, d: false }
    const keyPressedFirst = { w: false, a: false, s: true, d: false }

    updateKeyPressedFirst(keyObj, keyPressedFirst)

    expect(keyPressedFirst).toEqual({ w: false, a: false, s: true, d: false })
  })
})