import Util from '../../_util';

if (document.getElementById('vue-topNavDemo')) {
    new Vue({
        el: '#vue-topNavDemo',
        data: {
            isDisabled: true,
            notifications: 'Notifications',
            tickets: 'Tickets',
            support: 'Support',
            billing: 'Billing',
            account: 'Account',
            user: 'User',
            currentTab: 0,
        },
        methods: {
            selectedTag (selectedTag) {
                alert('selected icon');
                this.a.forEach(tab => {
                    alert('selected icon');
                    tab.isActive = (tab === selectedTag);
                });
            },
        },
        computed: {
            attrDisabled: function () {
                return (this.isDisabled ? 'disabled' : '');
            },
            snippet: function () {
                return Util.snippet(`
                    <div id="hxTopNav">
                        <a class="img-left brand-logo" href="#"> <img src="images/helix-logo.svg" alt="Logo" /></a>
                        <div class="productMenu">
                            <hx-disclosure id="topnav-productMenu" aria-controls="topnavProductDropdown" 
                            role="button" 
                            aria-expanded="true"
                            class="disabled">
                            <span>Select a Product</span>
                            <hx-icon class="hxPrimary" type="angle-down"></hx-icon>
                            </hx-disclosure>
                            <hx-menu id="topnavProductDropdown">
                            <div class="sectionHeader">
                                <hx-menuitem role="menuitem">Product alpha</hx-menuitem>
                                <hx-menuitem role="menuitem">Product Beta Services</hx-menuitem>
                                <hx-menuitem role="menuitem">Product Charlie Service Offering</hx-menuitem>
                            </div>
                            </hx-menu>
                        </div>
                        <div id="right-menu">
                        <div>
                            <a href="#" @click="selectedTag(tab)" :current-tab="currentTab">
                            <hx-icon type="bell"></hx-icon>
                            <p>Notifications</p>
                            </a>

                            <a href="#" class="selected">
                            <hx-icon type="ticketing"></hx-icon>
                            <p>Tickets</p>
                            </a>

                            <a href="#">
                            <hx-icon type="support"></hx-icon>
                            <p>Support</p>
                            </a>

                            <a href="#" class="disabled" id="billing">
                            <hx-icon type="billing"></hx-icon>
                            <p>Billing</p>
                            <hx-tooltip for="billing" position="bottom-center">
                                You do not have access to this area. Contact an account admin in your organization 
                                to request access to this item.
                            </hx-tooltip>
                            </a>

                            <a href="#">
                            <hx-icon type="account"></hx-icon>
                            <p>Account</p>
                            </a>
                        </div>
                        <div class="straightLine"></div>
                        <div>
                            <hx-disclosure id="topnav-menu" aria-controls="topnavMenuId" 
                            role="button" 
                            aria-expanded="true"
                            class="disabled">
                            <span>Jane User</span>
                            <hx-icon class="hxPrimary" type="angle-down"></hx-icon>
                            </hx-disclosure>
                            <hx-menu id="topnavMenuId" position="bottom-end">
                                <div class="sectionHeader">
                                    <hx-menuitem role="menuitem" class="menuKey">Account Number :</hx-menuitem>
                                    <hx-menuitem role="menuitem" class="menuValue">12345678</hx-menuitem>
                                </div>
                                <hr class="divider">
                                <div class="sectionBody">
                                    <hx-menuitem role="menuitem" class="menuValue">My Profile & Settings</hx-menuitem>
                                </div>
                                <hr class="divider">
                                <div class="sectionFooter">
                                    <button class="hxBtn">Log Out </button>
                                </div>
                            </hx-menu>
                        </div>
                        </div>
                    </div>
            `);
            },
        },
    });
}
