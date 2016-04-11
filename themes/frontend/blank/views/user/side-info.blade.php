<div class="pr_head">
                    <div class="header-object">
                        <a href="{{$loggedInUser->present()->url()}}" data-ajaxify="true">
                            <img src="{{$loggedInUser->present()->getAvatar(150)}}"/>
                        </a>
                    </div>
                    <div class="media-body">
                        <h5 class="media-heading">{{$loggedInUser->fullname}}</h5>
                    </div>
</div>
{{Theme::extend('user-side-preview-card')}}