describe('cipher', ()=> {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('window.cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33'), ()=> {
      assert.equal(window.cypher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG")
   }
  });

  describe('window.cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33'), () => {
      assert.equal(window.cypher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    };
  });

});