import { shallowMount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'

describe('ListItem.vue', () => {
  it('renders proper DOM', () => {
    const item = {
      store: 'Aldo 1',
      model: 'Model 1',
      inventory: 10
    }
    const wrapper = shallowMount(ListItem, {
      propsData: { item: item }
    })
    expect(wrapper.exists()).toBe(true);
  })
})
