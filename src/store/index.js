import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts: [
      { id: 0, time: 'Oct 1, 2023', postContent: 'Just setting up my darkgray page.', likes: 0 },
      { id: 1, time: 'Oct 2, 2023', imageName: 'https://www.nationalgallery.org.uk/media/30115/gogh-vincent-van-c-face-half.jpg?rxy=0.44407894736842107,0.43656716417910446&width=430&bgcolor=fff&rnd=132138118514970000', postContent: 'so great painter. My hole family wasz impresset.', likes: 0 },
      { id: 2, time: 'Oct 3, 2023', imageName: 'https://visittartu.com/sites/default/files/vemedia/3118_d315aaabe510a4ac932b784cf9965c60.jpg', postContent: 'Tartu year 1984 colorized.', likes: 0 },
      { id: 3, time: 'Oct 4, 2023', postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eu neque in placerat. Nullam posuere lectus eget lectus vestibulum, quis iaculis tortor imperdiet.Suspendisse bibendum auctor eleifend. Vivamus convallis vel felis iaculis pulvinar. Morbimollis feugiat ipsum. Sed luctus velit non placerat laoreet. Sed porttitor ante at auguevarius, sed sagittis mi eleifend. Nunc a metus lacinia, egestas felis sed, aliquam nibh.Praesent facilisis sit amet diam in facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris eget ante efficitur, vestibulum nisi eget, mattis sapien. Maecenas ex nibh, pretium quis arcu molestie, tincidunt ullamcorper odio. Fusce tincidunt nunc tincidunt eleifend maximus. Curabitur consectetur auctor accumsan.', likes: 0 },
      { id: 4, time: 'Oct 5, 2023', postContent: 'Bored today, gonna go hunt squirrels 😛.', likes: 0 },
      { id: 5, time: 'Oct 6, 2023', imageName: 'https://garyvaynerchuk.com/wp-content/uploads/2022/08/TwelveAndAHalf_FrontCover.webp', postContent: 'Truely amazing and inspiring. While i am sad to part with it, i am willing to take any offer that will pay shipping themselves', likes: 0 },
      { id: 6, time: 'Oct 7, 2023', postContent: 'Another day another dollar, make the tax man holla!', likes: 0 },
      { id: 7, time: 'Oct 8, 2023', imageName: 'https://as2.ftcdn.net/v2/jpg/05/80/61/41/1000_F_580614175_LW6mydM9ii6KEwPjF8aAlPqmlj21YKiC.jpg', postContent: 'This post was made by chonka gang.', likes: 0 },
      { id: 8, time: 'Oct 9, 2023', postContent: 'There is no way all the people walking on the streets of NY are real. Like they look and act like complete NPC-s', likes: 0 },
      { id: 9, time: 'Oct 10, 2023', postContent: 'crypto was a bubble!?!?!?!?!??!?!?!?!?!?!', likes: 0 }]
  },
  getters: {
  },
  mutations: {
    setLikes (state, { postId, likes }) {
      const post = state.posts.find((p) => p.id === postId)
      if (post) {
        post.likes = likes
      }
    }
  },
  actions: {
    resetLikes ({ commit, state }) {
      state.posts.forEach((post) => {
        commit('setLikes', { postId: post.id, likes: 0 })
      })
    }
  },
  modules: {
  }
})
