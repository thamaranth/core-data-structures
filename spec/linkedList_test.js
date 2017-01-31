import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('Linked List', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  describe('insert()', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const linkedList = new LinkedList()

      expect(() => linkedList.insert('foo'))
        .to.alter(() => linkedList.count, { from: 0, to: 1 })
      expect(linkedList.getHeadNode().data)
        .to.equal('foo')
      expect(() => linkedList.insert('boo'))
        .to.alter(() => linkedList.count, { from: 1, to: 2 })
       expect(linkedList.getTailNode().data)
        .to.equal('boo')
    })
  })

  describe('insertFirst()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const linkedList = new LinkedList()

      expect(() => linkedList.insertFirst('foo'))
        .to.alter(() => linkedList.count, { from: 0, to: 1 })
      expect(() => linkedList.insertFirst('boo'))
        .to.alter(() => linkedList.count, { from: 1, to: 2 })
      expect(linkedList.getHeadNode().data)
        .to.equal('boo')
      expect(linkedList.getTailNode().data)
        .to.equal('foo')
    })
  })
  describe('contains()', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const linkedList = new LinkedList()
      linkedList.insertFirst('foo')
      linkedList.insertFirst('boo')

      expect(linkedList.contains('foo'))
        .to.be.true
      expect(linkedList.contains('tap'))
        .to.equal(false)
    })
  })

  describe('find()', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const linkedList = new LinkedList()
      linkedList.insertFirst('foo')
      linkedList.insertFirst('boo')

      expect(linkedList.find('foo'))
        .to.deep.equal({ data: 'foo', next: null })
      expect(linkedList.find('tap'))
        .to.equal(-1)
    })
  })

  describe('clear()', () => {
    it('Clears the list of all nodes/data', () => {
      const linkedList = new LinkedList()
      linkedList.insertFirst('foo')
      linkedList.insertFirst('boo')
      linkedList.insert('shoo')

      expect(linkedList.clear())
      .to.be.undefined
    })
  })

  describe('removeFirst()', () => {
    it('Removes the head node from the list', () => {
      const linkedList = new LinkedList()
      linkedList.insertFirst('foo')
      linkedList.insertFirst('boo')
      linkedList.insert('shoo')

      expect(linkedList.removeFirst())
      .to.be.undefined
      expect(linkedList.getHeadNode().data)
      .to.equal('foo')
      expect(linkedList.removeFirst())
      .to.be.undefined
      expect(linkedList.getHeadNode().data)
      .to.equal('shoo')
    })
  })

  describe('remove()', () => {
    it('Removes the tail node from the list', () => {
      const linkedList = new LinkedList()
      linkedList.insertFirst('foo')
      linkedList.insertFirst('boo')
      linkedList.insert('shoo')

      expect(linkedList.remove())
      .to.be.undefined
      expect(linkedList.getTailNode().data)
      .to.equal('foo')
      expect(linkedList.remove())
      .to.be.undefined
      expect(linkedList.getTailNode().data)
      .to.equal('boo')
    })
  })

  describe('insertAfter()', () => {
    it('Inserts a node (with data) after the first node containing "(item)"', () => {
      const linkedList = new LinkedList()
      linkedList.insertFirst('foo')
      linkedList.insertFirst('boo')
      linkedList.insert('shoo')

      expect(linkedList.insertAfter('shoo', 'moo'))
      .to.be.undefined
      expect(linkedList.getTailNode().data)
      .to.equal('moo')
      expect(linkedList.insertAfter('moo', 'doo'))
      .to.be.undefined
      expect(linkedList.getTailNode().data)
      .to.equal('doo')
    })
  })

  describe.only('insertBefore()', () => {
    it('Inserts a node (with data) before the first node containing (item)', () => {
      const linkedList = new LinkedList()
      linkedList.insertFirst('foo')
      linkedList.insertFirst('boo')
      linkedList.insert('shoo')

      expect(linkedList.insertBefore('shoo', 'moo'))
      .to.be.undefined
      expect(linkedList.getTailNode().data)
      .to.equal('shoo')
      expect(linkedList.insertBefore('shoo', 'doo'))
      .to.be.undefined
      expect(linkedList.getTailNode().data)
      .to.equal('shoo')
    })
  })
})
