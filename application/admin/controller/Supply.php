<?php
namespace app\admin\controller;

use think\Controller;
use think\facade\Config;
use think\facade\Env;
use think\Request;

use app\patent\model\Patinfo as Pat;


class Supply extends Controller
{
    const SYSENT=['pat','pro','sol','ach'];
	const ENT='supply';
	
	private $brief=[];
	private $data=[];
	private $itemsTotal=[];
	
	private function _setBrief()
	{
		$arr=[
			'name'=>self::SYSENT,
			'routeStr'=>[],
			'total'=>[]
		];
		
		foreach(self::SYSENT as $key=>$val){
			$param=Pat::getPatNum();
			if($val=='pro')$param=0;
			if($val=='sol')$param=0;
			if($val=='ach')$param=0;
			
			$arr['routeStr'][$key]=self::ENT.'-'.$val;
			$arr['total'][$key]=$param;
		}
		
		return $arr;
		
	}
	
	public function __construct()
	{
		/* $this->itemsTotal=[
				'supply-pat'=>Pat::getPatNum(),
				'supply-pro'=>0,
				'supply-sol'=>0,
				'supply-ach'=>0,
			];
			
		$this->data=[
				'ent' => 'supply',
				'sysEnt'=>'',				
				'fields'=>[],
				'items'=>[]
			];
			
		
		return json_encode($this->itemsTotal); */
		
		$this->brief=$this->_setBrief();
		
		$this->data=[
			'ent' => self::ENT,
			'sysEnt'=>'',
			'fields'=>[],
			'items'=>[]
		];
		
		$this->itemsTotal=array_combine($this->brief['routeStr'],$this->brief['total']);
		
	}
	
	public function index()
    {
  		return json_encode(array_merge(
									$this->data,
									['itemsTotal'=>$this->itemsTotal],
									['brief'=>$this->brief]
								)
							);

	}
	
	public function pat()
    {
    	 
    	$result= array_merge($this->data,Pat::getPatList());   
		
        return json_encode($result);
    }

    public function pro()
    {
    	 
    	$result= array_merge($this->data,['sysEnt'=>'pro',]);   
		
        return json_encode($result);
    }
	
	public function sol()
    {
    	 
    	$result= array_merge($this->data,['sysEnt'=>'sol']);   
		
        return json_encode($result);
    }
	
	public function ach()
    {
    	 
    	$result= array_merge($this->data,['sysEnt'=>'ach']);   
		
        return json_encode($result);
    }
}
