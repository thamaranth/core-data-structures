import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoubleLinkedList from '../src/doubleLinkedList'

chai.use(chaiChange)

describe('Double Linked List', () => {
  'use strict'

  it('exists', () => {
    expect(DoubleLinkedList).to.be.a('function')
  })

  describe('insert()', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const doubleLinkedList = new DoubleLinkedList()

      expect(() => doubleLinkedList.insert('foo'))
        .to.alter(() => doubleLinkedList.count, { from: 0, to: 1 })
      expect(doubleLinkedList.getHeadNode().getData())
        .to.equal('foo')
      expect(() => doubleLinkedList.insert('boo'))
        .to.alter(() => doubleLinkedList.count, { from: 1, to: 2 })
       expect(doubleLinkedList.getTailNode().getData())
        .to.equal('boo')
    })
  })

  describe('insertFirst()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const doubleLinkedList = new DoubleLinkedList()

      expect(() => doubleLinkedList.insertFirst('foo'))
        .to.alter(() => doubleLinkedList.count, { from: 0, to: 1 })
      expect(() => doubleLinkedList.insertFirst('boo'))
        .to.alter(() => doubleLinkedList.count, { from: 1, to: 2 })
        console.log(doubleLinkedList)
      expect(doubleLinkedList.getHeadNode().getData())
        .to.equal('boo')
      expect(doubleLinkedList.getTailNode().getData())
        .to.equal('foo')
    })
  })
  describe('contains()', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const doubleLinkedList = new DoubleLinkedList()
      doubleLinkedList.insertFirst('foo')
      doubleLinkedList.insertFirst('boo')

      expect(doubleLinkedList.contains('foo'))
        .to.be.true
      expect(doubleLinkedList.contains('tap'))
        .to.equal(false)
    })
  })

  describe('find()', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const doubleLinkedList = new DoubleLinkedList()
      doubleLinkedList.insertFirst('foo')
      doubleLinkedList.insertFirst('boo')
      doubleLinkedList.insertFirst('shoo')
      doubleLinkedList.insertFirst('test')

      expect(doubleLinkedList.find('shoo').getData())
        .to.equal('shoo')
      expect(doubleLinkedList.find('tap'))
        .to.equal(-1)
    })
  })

  describe('clear()', () => {
    it('Clears the list of all nodes/data', () => {
      const doubleLinkedList = new DoubleLinkedList()
      doubleLinkedList.insertFirst('foo')
      doubleLinkedList.insertFirst('boo')
      doubleLinkedList.insert('shoo')
      doubleLinkedList.clear()

      expect(doubleLinkedList)
      .to.deep.equal({ count: 0, head: null, tail: null })
    })
  })

  describe('removeFirst()', () => {
    it('Removes the head node from the list', () => {
      const doubleLinkedList = new DoubleLinkedList()
      doubleLinkedList.insertFirst('foo')
      doubleLinkedList.insertFirst('boo')
      doubleLinkedList.insert('shoo')

      expect(doubleLinkedList.removeFirst())
      .to.be.undefined
      expect(doubleLinkedList.getHeadNode().getData())
      .to.equal('foo')
      expect(doubleLinkedList.removeFirst())
      .to.be.undefined
      expect(doubleLinkedList.getHeadNode().getData())
      .to.equal('shoo')
    })
  })

  describe('remove()', () => {
    it('Removes the tail node from the list', () => {
      const doubleLinkedList = new DoubleLinkedList()
      doubleLinkedList.insertFirst('foo')
      doubleLinkedList.insertFirst('boo')
      doubleLinkedList.insert('shoo')

      expect(doubleLinkedList.remove())
      .to.be.undefined
      expect(doubleLinkedList.getTailNode().getData())
      .to.equal('foo')
      expect(doubleLinkedList.remove())
      .to.be.undefined
      expect(doubleLinkedList.getTailNode().getData())
      .to.equal('boo')
    })
  })

  describe('insertAfter()', () => {
    it('Inserts a node (with data) after the first node containing "(item)"', () => {
      const doubleLinkedList = new DoubleLinkedList()
      doubleLinkedList.insertFirst('foo')
      doubleLinkedList.insertFirst('boo')
      doubleLinkedList.insert('shoo')

      expect(doubleLinkedList.insertAfter('shoo', 'moo'))
      .to.be.undefined
      expect(doubleLinkedList.getTailNode().getData())
      .to.equal('moo')
      expect(doubleLinkedList.insertAfter('moo', 'doo'))
      .to.be.undefined
      expect(doubleLinkedList.getTailNode().getData())
      .to.equal('doo')
    })
  })

  describe('insertBefore()', () => {
    it('Inserts a node (with data) before the first node containing (item)', () => {
      const doubleLinkedList = new DoubleLinkedList()
      doubleLinkedList.insertFirst('foo')
      doubleLinkedList.insertFirst('boo')
      doubleLinkedList.insert('shoo')

      expect(doubleLinkedList.insertBefore('shoo', 'moo'))
      .to.be.undefined
      expect(doubleLinkedList.getTailNode().getData())
      .to.equal('shoo')
      expect(doubleLinkedList.insertBefore('shoo', 'doo'))
      .to.be.undefined
      expect(doubleLinkedList.getTailNode().getData())
      .to.equal('shoo')
    })
  })
})
