function(){
　　var click_element = {{Click Element}};
    var click_element_tag = {{Click Element}}.getElementsByTagName('特定のタグ名');
　　//特定のタグ名が複数ある場合は、index番号を[i]の中で指定する
    var click_element_tag_value = click_element_tag[0].getAttribute('特定の属性名');

    return click_element_tag_value;
}