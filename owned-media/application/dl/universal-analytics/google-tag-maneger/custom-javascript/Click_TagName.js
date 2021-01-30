function(){
	var click_element = {
		parent: 20, // 遡るDOM階層の最大回数
		element: null,
		element_temp: null
	};

	//現在地から親要素へさかのぼって特定のHTMLタグを確認
	if({{Click Element}}.tagName == '特定のタグ名'){
		// 現在地が特定のタグ名の場合
		click_element.element = {{Click Element}};
	}else{
		click_element.element_temp = {{Click Element}};
		//定義した階層分遡って該当要素を検索
		for(var i = 0; i < click_element.parent; i++){
			click_element.element_temp = click_element.element_temp.parentNode;
			if(click_element.element_temp != undefined && click_element.element_temp.tagName == '特定のタグ名'){
				// 特定のタグ名にたどり着いた場合
				click_element.element = click_element.element_temp;
				break;
			}
		}
	}

	//最終判定
	if(click_element.element != null){
		//該当の要素(タグ名)が見つかった場合、該当のタグ名を返す
		return click_element.element.tagName;
	}else{
		// 特定のタグ名がが見つからなかった場合、Click Elementを返す
		return {{Click Element}};
	}
}