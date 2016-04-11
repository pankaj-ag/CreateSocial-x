<div class="container page-content clearfix">
    <div class="left-column">
        {{Theme::section('messages.right', ['conversations' => $conversations, 'userid' => $userid])}}
    </div>
    <div class="right-column">
        @if(count($conversations) or $userid)
            {{Theme::section('messages.message', ['messages' => $messages, 'userid' => $userid])}}
        @else
            <div class="box">
                <div class="box-title">Messages</div>
                <div class="box-content">
                    <div class="alert alert-info">
                        You don't have any new message
                    </div>
                </div>
            </div>
        @endif
    </div>
			<div id="appendix" class="appendix hidden-xs">
				{{Theme::section('appendix.ads')}}
			</div>
</div>