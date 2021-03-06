module.exports = {
    methods: {
        check: function() {
            console.log("Check for data");
            console.log(this.$userdata);
            console.log(this.$cur_user_data.account.value);
            console.log(this.$cur_user_data.password.value);
            console.log(this.$cur_user_data.online.value);
            console.log(this.$cur_user_data.id.value);
        },
    },
    data() {
        return {

        };
    },
    template: `
    <Page>
      <ActionBar :title="$route.path" />
      <StackLayout>
        <Button text="Register" @tap="$router.push('/register')" />
        <Button text="Login" @tap="$router.push('/login')" />
        <Button text="Check" @tap="check()" />
        <Button text="Profile"        v-if="this.$cur_user_data.online.value" @tap="$router.push('/profile')" />
        <Button text="Profile_false"  v-else @tap="$router.push('/profile')" />
        <Button text="Change"         v-if="this.$cur_user_data.online.value" @tap="$router.push('/change')" />
        <Button text="Ask Question"   @tap="$router.push('/question')" />
      </StackLayout>
    </Page>
  `
};