<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" ></a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>
    </ul>

    <ul class="nav navbar-nav d-md-down-none">
			<li class="nav-item header-item" v-for="item in itemList">
				<Dropdown>
					<router-link tag="div" :to='item.path'  style="height:55px;" class="nav-link">
							<p><Icon :type="item.icon" size='30' color="#2d8cf0"></Icon></p>
							<p  style="color:white"> {{item.title}} </p>
					</router-link>
					<DropdownMenu slot="list" v-if='item.children'>
							<DropdownItem 
							v-for='itemC in item.children'
							>itemC.title</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</li>
    </ul>


    <ul class="nav navbar-nav ml-auto">
      
      <li class="nav-item d-md-down-none">
        <a class="nav-link" ><Icon type="android-notifications" size="20"></Icon><span class="badge badge-pill badge-danger">5</span></a>
      </li>


      <Dropdown class="nav-item">
        <a href="javascript:void(0)">
           <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o">
          <span class="d-md-down-none">admin</span>
          </span>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="alert"></Icon>Updates<span class="badge badge-info">42</span></p>

            
            </Dropdown-item>
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="chatbox-working"></Icon>Messages<span class="badge badge-success">42</span></p>

            </Dropdown-item>
             <Dropdown-item>
              <p class="dropdown-itemp">  <Icon type="chatbox-working"></Icon>Messages<span class="badge badge-danger">42</span></p>

           </Dropdown-item>
              <Dropdown-item divided>
              <p class="dropdown-itemp"><Icon type="android-contact"></Icon> Profile</p>

              </Dropdown-item>
            <Dropdown-item >
              <p class="dropdown-itemp"><Icon type="android-settings"></Icon> Settings</p>
              </Dropdown-item>

                 <Dropdown-item > <a href="" @click="Logout"  ><p  class="dropdown-itemp"><Icon type="power"></Icon>Logout</p></a></Dropdown-item>

        </Dropdown-menu>
    </Dropdown>

 
      <li class="nav-item d-md-down-none">
        <a class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle">&#9776;</a>
      </li>
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'

export default {
  name: 'header',
	data() {
		return {
			itemList: [{
				title: '机器翻译',
				icon: 'android-cloud',
				path: '/translate'
			},{
				title: 'OCR',
				icon: 'android-cloud',
				path: '/ocr'
			},{
				title: 'NLP预处理',
				icon: 'android-cloud',
				path: '/nlp'
			},{
				title: 'W2V词向量',
				icon: 'android-cloud',
				path: '/wtv'
			}]
		}
	},
  components: {
    navbar,
  },
  methods: {
    Logout(e){
         e.preventDefault();
         this.$store.dispatch('LogOut').then(() => {
                this.$router.push({ path: '/login' });
              }).catch(err => {
                this.$message.error(err);
              });
    },
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>

<style type="text/css" scoped>
  .dropdown-itemp{
    text-align: left;
    font-size: 15px;
    padding: 10px;
  }
 .header-item .ivu-dropdown-item{
  padding: 15px;
}
  .header-item{
    width: 130px;
    /*background-color: #20a8d8;*/
    /*background-color: white;*/

    height: 55px;
    
    
  }
  .header-item a{
        color:white !important;

  }

</style>
