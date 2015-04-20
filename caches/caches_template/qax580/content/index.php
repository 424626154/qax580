<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>庆安县580</title>
    <link rel="shortcut icon" href="/statics/images/qax580/logo.jpg" />
    <link href="<?php echo CSS_PATH;?>/bootstrap.min.css" rel="stylesheet">
    <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
    <script src="<?php echo JS_PATH;?>/bootstrap.min.js"></script>
    <style type="text/css">
    body { padding-top: 50px; word-wrap: break-word; }
    .search { background-color: #eee; padding: 20px 0 20px 0; margin-bottom: 20px; }
    .search .container { max-width: 700px; }
    .navbar { background-color: #428bcb; }
    .navbar a { color: #fff; }
    .navbar a:hover { color: #fff; }
    .navbar .nav a:hover { color: #428bcb; }
    .navbar-toggle span { background-color: #fff; }
    #footer { clear: both; text-align: center; font-size: 12px; margin-bottom: 20px; }
    #footer #topcity { margin-bottom: 20px; }
    h1 { font-size: 24px; margin-bottom: 20px; }
    h2 { font-size: 18px; }
    .cities dl, .channels dl {  }
    .cities dd, .channels dd { display: inline-block; }
    .cities dt, .channels dt, .channels .channel_name { display: inline-block; background-color: #428bcb; color: #fff; font-weight: normal; border-radius: 20px; padding: 1px 10px 2px 10px; margin-right: 10px; }
    .channels .channel_name { margin-bottom: 20px; }
    #messages .sep { margin-bottom: 20px; }
    #messages .d { font-size: 12px; color: #ccc; }
    .breadcrumb { font-size: 12px; }
    form .verify { width: 250px; }
    form .error { margin-top: 5px; color: #f30; display: none; }
    form .info  { margin-top: 5px; }
  </style>
  </head>
  <body>
             <div class="login lh24 blue"><span class="rt"><script type="text/javascript">document.write('<iframe src="<?php echo APP_PATH;?>index.php?m=member&c=index&a=mini&forward='+encodeURIComponent(location.href)+'&siteid=<?php echo get_siteid();?>" allowTransparency="true"  width="500" height="24" frameborder="0" scrolling="no"></iframe>')</script></span></div>
                  </div>
              </div>
      <div class="navbar navbar-fixed-top" role="navigation">
            <div class="container">
              <div class="navbar-header">
            <a href="/qax580" class="navbar-brand">庆安县580</a>
              </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <?php if($_username) { ?><?php echo L('hellow');?> <?php echo get_nickname();?>,
              <li><a href="<?php echo APP_PATH;?>index.php?m=member&siteid=<?php echo $siteid;?>"><?php echo get_nickname();?></a></li>
              <li><a href="<?php echo APP_PATH;?>index.php?m=member&c=index&a=logout&forward=<?php echo urlencode($_GET['forward']);?>&siteid=<?php echo $siteid;?>">退出</a></li>
              <?php } else { ?> 
              <li><a href="<?php echo APP_PATH;?>index.php?m=member&c=index&a=register&siteid=<?php echo $siteid;?>">注册</a></li>
              <li><a href="<?php echo APP_PATH;?>index.php?m=member&c=index&a=login&forward=<?php echo urlencode($_GET['forward']);?>&siteid=<?php echo $siteid;?>">登录</a></li>
              <?php } ?> 
            </ul>
          </div>
            </div>
        </div>

        </div>
        <?php $n=1;if(is_array(subcat(0,0,0,$siteid))) foreach(subcat(0,0,0,$siteid) AS $r) { ?>
        <?php $num++?>
        <div class="box cat-area" <?php if($num%2!=0) { ?>style=" margin-right:10px"<?php } ?>>
            <a class="label label-default" href="<?php echo $r['url'];?>" ><?php echo $r['catname'];?></a>
             <div class="content">
             <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=ef41dd2190feee94486d0264e7354ef2&action=lists&catid=%24r%5Bcatid%5D&order=updatetime+DESC&thumb=1&num=1&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$r[catid],'order'=>'updatetime DESC','thumb'=>'1','limit'=>'1',));}?>
             <?php $n=1;if(is_array($info)) foreach($info AS $v) { ?>
              <p>
                <img src="<?php echo thumb($v[thumb],90,0);?>" width="90" height="60"/>
                    <strong><a href="<?php echo $v['url'];?>" target="_blank" title="<?php echo $v['title'];?>"<?php echo title_style($v[style]);?>><?php echo str_cut($v['title'],28);?></a></strong><br /><?php echo str_cut($v['description'],100);?>
                </p>
              <?php $n++;}unset($n); ?>
              <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>                
                <div class="bk15 hr"></div>
                <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=d9a5a0d61f080dbce4b2774d783edd34&action=lists&catid=%24r%5Bcatid%5D&num=5&order=id+DESC&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$r[catid],'order'=>'id DESC','limit'=>'5',));}?>
                    <ul class="list-group">
                      <?php $n=1;if(is_array($info)) foreach($info AS $v) { ?>
                        <li class="list-group-item"><a href="<?php echo $v['url'];?>" target="_blank" title="<?php echo $v['title'];?>"<?php echo title_style($v[style]);?>><?php echo str_cut($v['title'],40);?></a></li>
                      <?php $n++;}unset($n); ?>
                    </ul>
                <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
            </div>
        </div>
        <?php if($num%2==0) { ?><div class="bk10"></div><?php } ?>
    <?php $n++;}unset($n); ?>
    </div>

  </body>
</html>