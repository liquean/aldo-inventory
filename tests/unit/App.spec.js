import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders proper DOM', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).toBe(true);
  })

  it('adds item to data', () => {
    const wrapper = shallowMount(App)
    const item = { store: 'Store', model: 'Model', quantity: 1 }
    wrapper.vm.addItemToData(item)
    expect(wrapper.vm.data.length).toBe(1)
  })

  it('updates selected store', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.onSelectedStore('Aldo 1')
    expect(wrapper.vm.selectedStore).toBe('Aldo 1')
  })

  it('updates selected model', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.onSelectedModel('Model 1')
    expect(wrapper.vm.selectedModel).toBe('Model 1')
  })

  it('clears filters', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.clearFilters()
    expect(wrapper.vm.selectedModel).toBe('')
    expect(wrapper.vm.selectedStore).toBe('')


  })
})
