<div class="container page-content clearfix">

        <div class="left-column">

                <div class="box nav-box">
                        <div class="box-title">Search Menu</div>
                        <ul class="nav">
                            <li><a data-ajaxify="true" href="{{$searchRepository->url('people')}}">{{trans('user.people')}}</a> </li>
                            <li><a data-ajaxify="true" href="{{$searchRepository->url('posts')}}">{{trans('post.posts')}}</a> </li>
                            <li><a data-ajaxify="true" href="{{$searchRepository->url('pages')}}">{{trans('page.pages')}}</a> </li>
                            <li><a data-ajaxify="true" href="{{$searchRepository->url('communities')}}"> {{trans('community.communities')}}</a> </li>
                            <li><a data-ajaxify="true" href="{{$searchRepository->url('games')}}"> {{trans('game.games')}}</a> </li>
                            <li><a data-ajaxify="true" href="{{$searchRepository->url('hashtag')}}">{{trans('hashtag.hashtags')}}</a> </li>

                        </ul>
                </div>

            {{Theme::widget()->get('user-search')}}
        </div>

        <div class="right-column">

            {{$content}}

        </div>
			<div id="appendix" class="appendix hidden-xs">
				{{Theme::section('appendix.ads')}}
			</div>
    </div>