<div class="container page-content clearfix">
        <div class="row">
            <span style=" cursor: pointer;"><a href="{{URL::route('user-credits')}}" data-ajaxify="true">
                <img src="{{(isset($avatar)) ? $avatar : $loggedInUser->present()->getAvatar(50)}}" width="80" height="80" style="border: solid 5px #000;" href="{{URL::route('user-credits')}}"/>
                </a>
            </span>
            @foreach($users as $user)
            {{Theme::section('user.spotlight', ['user' => $user])}}
            @endforeach
        </div>
          
        <div class="left-column">
            {{Theme::extend('timeline-before-post-editor')}}
            
            {{Theme::section('post.editor.main')}}

            {{Theme::extend('timeline-after-post-editor')}}
            <?php Theme::widget()->add('user.home.feeds', ['user-feeds'] )?>
            {{Theme::widget()->get('user-feeds')}}
        </div>

        <div class="right-column">
            <?php Theme::widget()->add('user.home.pnkjtest', ['user-home'] )?>
            {{Theme::section('user.side-info')}}
            {{Theme::widget()->get('user-home')}}
        </div>
    </div>