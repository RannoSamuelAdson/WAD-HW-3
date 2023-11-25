import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts: [
      { id: 0, time: 'Oct 1, 2023', imageName: '@/assets/post_images/self-portrait.jpeg', postContent: 'Just setting up my darkgray page.' },
      { id: 1, time: 'Oct 2, 2023', imageName: '@/assets/post_images/self-portrait.jpeg', postContent: 'so great painter. My hole family wasz impresset.' },
      { id: 2, time: 'Oct 3, 2023', imageName: '@/assets/post_images/tartu.jpeg', postContent: 'Tartu year 1984 colorized.' },
      { id: 3, time: 'Oct 4, 2023', imageName: '@/assets/post_images/self-portrait.jpeg', postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eu neque in placerat. Nullam posuere lectus eget lectus vestibulum, quis iaculis tortor imperdiet.Suspendisse bibendum auctor eleifend. Vivamus convallis vel felis iaculis pulvinar. Morbimollis feugiat ipsum. Sed luctus velit non placerat laoreet. Sed porttitor ante at auguevarius, sed sagittis mi eleifend. Nunc a metus lacinia, egestas felis sed, aliquam nibh.Praesent facilisis sit amet diam in facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris eget ante efficitur, vestibulum nisi eget, mattis sapien. Maecenas ex nibh, pretium quis arcu molestie, tincidunt ullamcorper odio. Fusce tincidunt nunc tincidunt eleifend maximus. Curabitur consectetur auctor accumsan.' },
      { id: 4, time: 'Oct 5, 2023', imageName: '@/assets/post_images/self-portrait.jpeg', postContent: 'Bored today, gonna go hunt squirrels 😛.' },
      { id: 5, time: 'Oct 6, 2023', imageName: '@/assets/post_images/81C0IQ6G55S._AC_UF1000,1000_QL80_.jpg', postContent: 'Truely amazing and inspiring. While i am sad to part with it, i am willing to take any offer that will pay shipping themselves' },
      { id: 6, time: 'Oct 7, 2023', imageName: '@/assets/post_images/self-portrait.jpeg', postContent: 'Another day another dollar, make the tax man holla!' },
      { id: 7, time: 'Oct 8, 2023', imageName: '@/assets/post_images/cat.jpg', postContent: 'This post was made by chonka gang.' },
      { id: 8, time: 'Oct 9, 2023', imageName: '@/assets/post_images/self-portrait.jpeg', postContent: 'There is no way all the people walking on the streets of NY are real. Like they look and act like complete NPC-s' },
      { id: 9, time: 'Oct 10, 2023', imageName: '@/assets/post_images/self-portrait.jpeg', postContent: 'crypto was a bubble!?!?!?!?!??!?!?!?!?!?!' }]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
