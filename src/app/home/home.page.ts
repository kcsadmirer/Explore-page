import { Component } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { CategoriesPage } from '../categories/categories.page';
import { NotesPage } from '../notes/notes.page';
import { LocationPage } from '../location/location.page';
import { RatingPage } from '../rating/rating.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segment: string;

  value:string = '';
  items:any = [
    ['x-patel','@x1','223k','4%','',false],
    ['carryminati','@carry1','193k','4.2%','https://cdn.dnaindia.com/sites/default/files/styles/half/public/2019/09/30/871900-carryminati-093019.jpg?itok=D5znOf0t',false],
    ['bhuvan bam','@bhuvan1','150k','4.5%','data:image/jpeg;base64,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',false],
    ['Ashish Chanchalani','@Ashish1','165k','4.7%','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSERIWFRUWEhYVFhgVFRUYFxgWFxUXFhcXFxcYHSggGBolGxYVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0gHSUrKysrLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLTctLS0rLS0tLS0tKzctLf/AABEIAL8BBwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xAA+EAABAwEFBQUGBAQGAwAAAAABAAIRAwQFEiExBkFRYXEigZGhsQcTMsHR8EJSYuEjgpLxFCQzcrLCNFOi/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EACIRAQEAAgICAgMBAQAAAAAAAAABAhEDIQQxEkEiMlFxE//aAAwDAQACEQMRAD8A9wKaQnlIg54UhC6EJpUhhC5ELumOag5JQnEJsIBdWpoShA9CAUoQK1Rb0vKlZ6Zq1ntYwalx8hxPIJL3vBtCk6q9zWho1e4NaOpP7lfNO3O1lW2Vifel7RIaAC1onUNB1HMgE8FXK6Wk2023ftNdaSaVnLmUswTo9/X8reXjwWFpXu5zszHPeoTAT8Q+iPeAaQO6PNc+3WNhs9flRlRsnQiHA8DyXrNo2+s1GzitUdLj2A3Qlw1P+3MSV89MtMb8/venXrbGVx28TXsb2TMggboP3l0THaMtV60/2vAnIGM8mBvm50+AHetHcXtIs9XJ5dTP64z/AJhl6L5wu6pnmVcU7aNB5yptsJJX1Xdt5067cVN2IcYMeJCmrw/2bbT1adTAXFzDq0kk9RK9up1A4AgyCJBCtjltTLHRyEIVlAhCEAhCEAhCEAhCEAhCECoQhAhSFKU0lSEKY5PJTUDIRhToQQgZC6NSQlCBUqIQdEHgPth2mq1rSbO04adPIczvP3uXnbGgZuOfEq+2weTaqjndqXuI4ROqpaVn94/LPdA0C4Wu+OP05OOI5Seg+q7sul7sw0rY7PbOjJzhnw4BbKy3YyNFxvL/ABpx4Ou3jZuSoXBsa781Ps+x9V47RK9cF1MmcInoh1jA0CrebJb/AI4PH7bsbVYJYZ5EKt/wr2ZPBHVe21aAI0WX2luhrqbiRuTHnu9VXLgmtxlbjtcPbGoORGo5L6K2LvH3tEDeADkQRnqJHP1XzVstbGUq7feMLmkFriJxNiCHCM8j5Twz922IvOliApuDgTE6HPSeOa0y6rLlN4vQUIQuriEIQgEIQgEIQgEIQgEIQgVIlSIBMKcU1SEKSE5CBqUpUiBIShOSAIFBSoQg+Xdr2OdXqHL/AFnAd7jPyUnYS7Mb378IzK67eWM0rXXpE5Me9xPJxD2+TgrXYyhVZYHVKTe3WeQD+VgESsuXrTVh+22no0A3KQrGi3mFiKuyNoqNxOtRaeBk+hCLqsdoouGKqHQdxOY+q4fHGfbTMsr9PQW0kypTT6NaWjosrfYtJLmseG5mCdyaid1a2uAqe+mYqTsPBV9g2Urvlzrbi4hv1lWVhuutTJpGXt3Hnw6KLhPcp8/qx5VZagp1ySNCT3gg/Vel7G2drbbSq0Hdio5oLNwkg5fe5ed7XWP3NpIGjhiHKdVuvZQMdrpNk9lwcc/yhxA8QtU71WP1bHvqEIXdnCEIQCEIQCEIQCEIQCEIQKkSpECSmp2FGFSGpUYUFAIKCklAqUJEoQCISoQeB+26xOba3uAgVaVMg8S3smPALVXDZ/c3dZ2gZ+4Ye9zcXzVl7X7v97Z2kCS3GRy+HP1XerZ4Yxg0axo8BCy8t6rVxT1XnV6WW11seIlhke7wvGGJ7WPe3LTD3zubd9grMhrnYjJxHtOkHQSeC3VWlxAUWhQBqZxkCT0Wfd1psknsljY8NE8FV3pZ3vMB0Sc8pkcOSvbFeNmq03VKdZjmNJBcCIEayd0KIK1Oo0VaL21GExiaQRMxqFGtJl2ydHZ61NqF7axwmSG4nCJJLR2sQgSBpOS1ez77Q0D3+EuG8EkHxzVpTbkpVmYycwrXeSl6eZ+2C5w200KgHZqU3f1At+qu/YndxFpq1I7LKWGeZI+jlpNt7vZVpUnP+GlWBn9Lsj3aK02JsrWOJpgBpp6DSQ4fVaJl3MWW47xuTXoQhaGUIQhAIQhAIQhAIQhAIQhAqRKUiASSgpCpAXJCkQgVIhCBwSpAlCBUIQgodtrO99keKbcThGQ3jQqipWnHTY8fiaD5LbWqniY5o3ggLH1bGaTQ1zSImNN5J3LPy4/bTxZdaQ3mVCt+ktMOiJ+qlVlV221tpkYjLjo0ZnvWVsl/hbrsDadMgMYMRJIa0NBJ3kJbpsQp9gNaxgdiDWNgTxPFV4vd5zNN+Ry7B8lKsl7ggGqx1OdC4R4q2qvccp2vwllcKL+a66lV2502/bRNJtMDE57gAOO4noJlXOw11VKDHioQTjIETAG6CddyiGze9qMpNAxe7c8uP4WyGjxJP9K1lioYGBszA1Wjjxty2zcnLrD4z7d0iUpFpZAhCEAhCEAhCEAhCEAhCEClIlKRA0lCUhEKQ0pE4pqASoCVAIQhAqVNSygVVO0NCWYvy+h/dWhcBmVmr72gpl7bOzMvxZ7uwCTHHNVyn41bG6yiiqqGLMxxkgE8UlptYDi05FPs9UayvPs7ejjl0ZWYQYDlN/wzCAXAEhOYW66plesBoi9yKBC62XNwVY+3hS7tqyVGPvtTK9NpdFlALqm9zWs7mlx/7eSs1Gu3/TapK9DH087P2UpEqRWVCEIQCEIQCEIQCEIQCEIQKkSpCgEIQpDXBIlJVVeF906Zwt7Z5fCDpmeqmS30i2T2s0oWbr7S4RmADyVLaNqnEnC06auJI04EiPBdJw5VyvNjG6qWljdXAd6jPvakN5PcV59V2jfuaB9/T0VfUv2o7Ux4fv8AZXWeP/XO+R/Hodq2lps0aT4BUV4bZvzwANHHIeZlY2pb3uPaPp9OfkFEYXPqAOEgSTnIyG8RxjxXScGM+lLzZX7aC13jVqkF7nS7QYnEAcY45/e6gva9fd3nZWD4Wh7PFhB8yre7s3F50bJ79w+a8/vao51uovdvqPg9R/Zc/JmuK6X8W/Llm3o95UA/NVRc9hyKuLO6WieCj1qGa8GZvf8Aii0rwqb4Q+0vdlPguwsoUijZgnyTpDs9mJ1V9YBhIXGnRhd6RDTJMAZnoFXe6jWo1Oyd8ttArNBH8C0PomP0x85V8vGPYze3+YtzT+O0VKv/ANSfJy9bsl5U35TDhkWuyIPzXrfHqPIuU+VlTEISEqFioSSlQCEIQCEIQCEIQCEIQKkSpEAgoVLtDfAotwN+Mj+kceqtjjcrqK5ZTGbqLtNeUfww/CI7Ua9PRZY2sGn2QQPegSTm7MSZ18FHcx9V2ZMk6n76qPaq4+Bo7LTAgkaRmY7yt2HHMZp5+XJcstmVLQeJkyTyG75KFVqldbS6Mt8SfkO5RnOXeRz2a90DPj8lyqM3J9XcmkZSpSa0pbMcyTqch3a+OXgmlsddFLu2kHVA3c0En75yoonV3e7pRviT1/usTetm7VJ4Hw1J6Tl6ALYXq+R1d6Z6dYXO57oFoe+kYH8Ilh4OaWwemcHkVm8jG3iy00+JlMeSWrOwO7I6Kc6iCq+yUHsGB4hzciDxCt7K2V80+kqI2guraanGzprqMK2ldo5Eaqkvq0nCWjfkeiuK7lDu+6zaK2E6DN54N+p0HfwKnDG26iLZJusv7PrMbPbmOcYFofUy/Sey3xgnwXol/wBt9z7t5GZOAH9W6d8a+CyO1sULXQe0ABsuy0ADgAB0AIWj28aHWcPgEB7HtPXL/t5L3+LHUkeDzXedq4ubaNj8g6JMQ7TU6Hh2StHRtLXcvReLXRb8JBzAGoBjcRlwyW3oWuphD6LhUbGghro6fCY36KeXhn0rhy2NyEqoLuvvEBII6jLx08CVc0rS1wmR4rLljY045yuyEIVVghCEAhCEAhCECpEqRBxtdcMY55/C0led2m0Gs8vO/IDlxWq21tOGgGDV7gP5RmfOPFY+hIbiOp0HLctfj49bY/Jy7+LrXqhlNxGvwjqVnaJl0dPUKwvutGFgOgk9Sq+7/icf0gDXVzoC1TqMrtXG/jJ7lCqKdbT24nIZftmoT/CT9d/QK0CPGXVI4J5IMHl6ZFNaJVg6hRJPTPv+5VldlDBiMZmBkN0k+GSr32/3bQxjMTiTiLpDGzoMs3HLdGqqLyNSuMNSo4t/K3sMjgWt1HWVzstWmvtdWisyo93uqjHGmYIY6YJE4ZGRd2SrHZKqWWto/C4PHiCQPEBYCxmpYyTTaCx3xM3GNDIzBGcHnvWnsF7QW1aAJEy4O1Y4bpG/eDvG5Uyxy1Y6Y2Syx6tet1CqPeNHajP9QHzVPToYVf3NeLatNlRvwuE9DoQehkLrb7vD+03J3keq8bm4N3c9vX4ufU1fTPym1BIUwXZVJ+COZIhTbPcn/sdP6WyB3nU90LhOLO9aaLy4z7Zyy2B9V2Fg6uPwt+p5DyWnu+7mWdmFm/Nzjq53E/TcrBlNrRhaAANAMguNfQrXxcMw/wBZeTlufX08j25zrjKYGm/N37LQ1KorXX+ZzGBjuTmECfIHvVHtHZ3VLQ4N1MgafhGmeXFW+xlPCx9J9RrhVYHgA9qADTecJG7sZ8V6M1MY83LdyrF2Z8Hqc1cWC3vouDmnQ5jcVWXhZTSqvpu1Y8jqNQe8Z967sMiVpncca2FK34v4lIyNXMOoO+OIVtYbWx+dN2E8DoMo0+kLBUKrmQWnNT6Nuh2IZceq5Zca0zejWe2OGW8bjop1ktzanIycjrksZd97Yj9VJsNpiowtJEVcJBMgMfIbE6Z4ZHIrNnxNGHI2aEIWZpCEIQCEIQKkSplR4aCToBKDIbWHHVwzk0Ad5gnygKjc7FUgaNCnXpXlzncST3nnw+ip21opvedTkvR45rGR5nJlvK1U3jVxOM8U67Bk53BwOu9jS4Dnn6KLWdC62Gp2I6uPeSB6Lrf4ofVdM9fRc9XdY80ypU0HHMrpROfcT8lfSu3So0Hp9nXVMazOd+Z9fqjH6pzTKaTs0sn74rnUohd2oqaIhWVKU6qvpUTTqdglpI+wRvCuyxQLaILTwP8AdStttfZxes46LhhJ7YH4ZEBxHCcsuS9Ds715V7Pm/wCZ/lqE98R5QvU7MF5vkSfPpv4Lbh2kkppKVC4O5pXC06FdyFwtZhjjwafRXhXlNoq4qlQ4sMPxYpjCAZLp5Bec3xetoZbBbLM8j3UNpjhTbqCN4cS5xH6ivS7XQAeY/E0zzPA8QQsxtDdbRhqsAEnC8DTFGTgNwI3cQeK2XCZTVYplq7TrxvhttZRtTWYHVKWGo3hUY4tcBxEYY5QulBpw5quuShhp4IyFRzxyxNAI8RKtqenmu2E1NOOd7LTGWacweX7ptI5LoCNysq7WSoWuOe5WTLXLSRk7CXTlqHTn3hxVI10lTLFWEGdCAB0Ik+ZCplimV6ncltNai15EEgT1hTis7spacizlI++notEvN5MdZWPR48t4yhCEKi4QhCBVT3/XgNZOsk9ArhZO97UC9ztw07tPquvDjvJx5stYsxfleMpVfanxTaJ1MrjedbEUl4P+AcGBehI89W2mpqn3fmXcA1g7yJPoolqdmc1Nu4DDPEjyY1W+yltLMwQnUAQDO/Jca5c8gNaTnkezAyzzKdba2HIDTXIaxxEb/RWRp0Zv8l0aojbSCD3eZd8oXShVBI6efZHqfJDSW0px0XNrhrP04a/e5dN3h9UNOVRQbdTBbi3yFPc1RbYAGGfsaoleezzE+0ve7X3WfAZgZea9SszclgfZzZxhqP4lrfCSfUL0KmIC83nkmWp6ehw23HdLCITkLk7GEKFepijUP6D6KeqzaAxQdzgeJCtj7MvTz63t0dwd65KmvEh1GRvcPEZ/NXl4gljo1mfDNVd7huF2HSWx3ZDvwxK2xgvqoFgZl3qUKceEec7lxsw7Pcu7HfNd9OFowD7n68gho7o0yHFJTKSU0jdKwic9e76Ia7h6R039M03Fv5E+AXMnM7uHdkoJW22HtM1AOLSt6vM9hKn8dvf6L01ef5H7vQ8e/gRCELg7hCEIOFvqYabjP4SsBelfI5rS7SWgkOaDEA+Ma/fBYK118TNdDHfktvj4am2HyM93UVldwMlFpdiA/wBrfRcnHPkFwr1iAO8LVPbOg298Aqyuz/SJ/Wf+LVS26pMc1ZXHX7NVnB1N39UtP/AKPta+lzduAsABlw+Js5gzmY/LzEqBbACY4n1RTo4nCDEEGRrMxrqu7WsDpqZ56gagbnN037oU9xWa2T/DtZiAHaBDSdROEEx4rg2zjvPpmE8vafgYcpOrWiSczAnikY925jQRkJLz6EcEx3rv2nKTfXo6lZi04g6AM+1MeRByU1rgWzxzz5ri8PIh2HtS04cQymTqTzXWkFKKY5pmRuUK25gAjUgffcFY1DA6qttLS57c9M/vwUxD0f2f2TDZwfzvc7w7PyWwCqNnKGCjTbwpt8SJPmVbry+S7ytepxzWMgSJUhVFwqnaV38KOLh8yrdUO1dTssHMnwH7q2H7RXO/jWQtwGE7ln7zypAby/5Sr+2NmB95rPbQvAfTpzAjEe89OC3Y+2K+hRPZ8EtN2RSWeq0gCc4jfz5cQufvG7jP9+i7s+jmvSn78kNaPP5lPLcgU2jR7G5TpEZ9SFFcc11qEik4zvaPGfouThk08QqX2lqPZ/8A+R3fIr04LzvYWlhqg8QfReiLz/I/Zv8AH/UIQhcWgIQhB//Z',false],
    ['Josh','@Josh','162k','4.8%','',false],
    ['James Corden','@James2','137k','5%','https://pyxis.nymag.com/v1/imgs/3b8/6e4/8b36684946f23086deaebb81c707b573c9-25-james-corden.rsquare.w1200.jpg'],
    ['Jimmy Fallon','@Jimmy','190k','5.4%','',false],
    ['Jimmy Kimmel','@Jim','177k','5.7%','',false]
  ];
  constructor(public popoverController: PopoverController, public toastController: ToastController) { this.segment = 'forYou'; }
  async book(x:number) {
    this.items[x][5] = true;
    const toast = await this.toastController.create({
      message: 'Influencer Saved!!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
  async book2(x:number) {
    this.items[x][5] = false;
    const toast = await this.toastController.create({
      message: 'Influencer Unsaved!!',
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
  async presentPopover() {
    const popover = await this.popoverController.create({
      component: CategoriesPage,
    });
    return await popover.present();
  }
  async presentNotes() {
    const popover = await this.popoverController.create({
      component: NotesPage,
    });
    return await popover.present();
  }
  async presentLocation() {
    const popover = await this.popoverController.create({
      component: LocationPage,
      // cssClass:'container-div',
      mode:'md'
    });
    return await popover.present();
  }
  async presentRating() {
    const popover = await this.popoverController.create({
      component: RatingPage,
    });
    return await popover.present();
  }

  ngOnInit() {
  }
  
}
