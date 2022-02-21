import { shallowMount, mount } from '@vue/test-utils'
import SelectInput from '@/components/SelectInput.vue'

describe('SelectInput.vue', () => {
  it('renders proper DOM', () => {
    const array = new Set(['Aldo 1', 'Aldo 2'])
    const wrapper = shallowMount(SelectInput, {
      propsData: { array: array }
    })
    expect(wrapper.exists()).toBe(true);
  })
  it('renders proper DOM', async () => {
    const array = new Set(['Aldo 1', 'Aldo 2'])
    const wrapper = mount(SelectInput, {
      propsData: { array: array }
    })
    const options = wrapper.find('select').findAll('option')
    await options.at(1).setSelected()

    expect(wrapper.vm.model).toBe(array.values().next().value);
  })
})
